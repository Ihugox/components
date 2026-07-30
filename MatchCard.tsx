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
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "20px",
        color: "#FFFFFF",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <p
        style={{
          color: "#94A3B8",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        🏆 {league}
      </p>

      <h2
        style={{
          fontSize: "24px",
          marginBottom: "10px",
        }}
      >
        {homeTeam} × {awayTeam}
      </h2>

      <p>🕒 {time}</p>

      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <p>Confiança da IA</p>

        <div
          style={{
            background: "#334155",
            height: "10px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${confidence}%`,
              height: "100%",
              background: "#22C55E",
            }}
          />
        </div>

        <p>{confidence}%</p>
      </div>

      <p
        style={{
          color: valueBet ? "#22C55E" : "#EF4444",
          fontWeight: "bold",
        }}
      >
        {valueBet
          ? "💎 Value Bet encontrada"
          : "❌ Nenhuma Value Bet"}
      </p>

      <button
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          background: "#2563EB",
          color: "#FFF",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Ver análise
      </button>
    </div>
  );
                  }
