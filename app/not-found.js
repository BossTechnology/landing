export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "system-ui", background: "#050510", color: "#fff", textAlign: "center", padding: 24 }}>
      <div>
        <p style={{ opacity: 0.6, letterSpacing: ".14em", fontSize: 12 }}>404</p>
        <h1 style={{ fontSize: 32, margin: "12px 0 20px" }}>Página no encontrada</h1>
        <a href="/" style={{ color: "#9692ff" }}>Volver al inicio</a>
      </div>
    </main>
  );
}
