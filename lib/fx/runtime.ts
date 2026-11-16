/**
 * Small runtime for page effects (animations and widgets that work directly on the DOM).
 * Every listener, timer, observer and node created through a Ctx is undone by dispose(),
 * so effects can run again safely after each client-side navigation.
 */
export type Lang = "es" | "en";

export interface Ctx {
  lang: Lang;
  en: boolean;
  reduce: boolean;
  path: string;
  on(target: EventTarget, type: string, fn: (e: any) => void, opts?: AddEventListenerOptions | boolean): void;
  timeout(fn: () => void, ms?: number): number;
  interval(fn: () => void, ms: number): number;
  raf(fn: FrameRequestCallback): number;
  cancelRaf(id: number): void;
  io(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit): IntersectionObserver;
  added<T extends Node>(node: T): T;
  defer(fn: () => void): void;
  readonly disposed: boolean;
}

export type Effect = (ctx: Ctx) => void;

export function createCtx(lang: Lang, path: string): Ctx & { dispose(): void } {
  const undo: (() => void)[] = [];
  const timers = new Set<number>();
  const rafs = new Set<number>();
  let disposed = false;
  const ctx = {
    lang,
    en: lang === "en",
    reduce: typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches,
    path,
    get disposed() { return disposed; },
    on(target: EventTarget, type: string, fn: (e: any) => void, opts?: AddEventListenerOptions | boolean) {
      target.addEventListener(type, fn, opts);
      undo.push(() => target.removeEventListener(type, fn, opts));
    },
    timeout(fn: () => void, ms = 0) {
      const id = window.setTimeout(() => { timers.delete(id); if (!disposed) fn(); }, ms);
      timers.add(id);
      return id;
    },
    interval(fn: () => void, ms: number) {
      const id = window.setInterval(() => { if (!disposed) fn(); }, ms);
      undo.push(() => clearInterval(id));
      return id;
    },
    raf(fn: FrameRequestCallback) {
      const id = requestAnimationFrame((t) => { rafs.delete(id); if (!disposed) fn(t); });
      rafs.add(id);
      return id;
    },
    cancelRaf(id: number) { cancelAnimationFrame(id); rafs.delete(id); },
    io(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
      const o = new IntersectionObserver((e, obs) => { if (!disposed) cb(e, obs); }, opts);
      undo.push(() => o.disconnect());
      return o;
    },
    added<T extends Node>(node: T) {
      undo.push(() => node.parentNode?.removeChild(node));
      return node;
    },
    defer(fn: () => void) { undo.push(fn); },
    dispose() {
      disposed = true;
      timers.forEach((id) => clearTimeout(id));
      rafs.forEach((id) => cancelAnimationFrame(id));
      for (let i = undo.length - 1; i >= 0; i--) { try { undo[i](); } catch { /* ignore */ } }
    },
  };
  return ctx;
}

export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));
