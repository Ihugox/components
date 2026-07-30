        type MatchCardProps = {
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  confidence: number;
  valueBet: boolean;
};

export default function MatchCard({
  league,
  homeTeam,
  awayTeam,
  time,
  confidence,
  valueBet,
}: MatchCardProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        color: "#FFF",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "16px",
      }}
    >
      <h3>{league}</h3>

      <h2>
        {homeTeam} × {awayTeam}
      </h2>

      <p>🕒 {time}</p>

      <p>📊 Confiança: {confidence}%</p>

      <p style={{ color: valueBet ? "#22C55E" : "#EF4444" }}>
        {valueBet ? "💎 Value Bet encontrada" : "❌ Sem Value Bet"}
      </p>

      <button
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          background: "#2563EB",
          color: "#FFF",
        }}
      >
        Ver análise
      </button>
    </div>
  );
}
