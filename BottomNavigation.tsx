export default function BottomNavigation() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#0F172A",
        borderTop: "1px solid #334155",
        padding: "12px 0",
        color: "#FFFFFF",
      }}
    >
      <div>🏠<br />Início</div>
      <div>⚽<br />Jogos</div>
      <div>📊<br />Análises</div>
      <div>💰<br />Banca</div>
      <div>👤<br />Perfil</div>
    </nav>
  );
}
