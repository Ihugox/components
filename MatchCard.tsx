export default function MatchCard() {
  return (
    <div
      style={{
        background: "#1E293B",
        color: "#FFFFFF",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "16px",
      }}
    >
      <h3>🇧🇷 Brasileirão Série A</h3>

      <h2>Bahia × Corinthians</h2>

      <p>🕒 16:00</p>

      <p>📊 Confiança da IA: 82%</p>

      <p style={{ color: "#22C55E" }}>
        💎 Value Bet encontrada
      </p>

      <button
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "12px",
          borderRadius: "8px",
          border: "none",
          background: "#2563EB",
          color: "#FFFFFF",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Ver análise
      </button>
    </div>
  );
}
