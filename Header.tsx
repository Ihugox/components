export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 20px",
        background: "#101B2D",
        borderBottom: "1px solid #334155",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#FFFFFF",
          }}
        >
          ⚽ Football Pro
        </h2>

        <p
          style={{
            color: "#94A3B8",
            fontSize: "13px",
            marginTop: "4px",
          }}
        >
          Análises profissionais de partidas
        </p>
      </div>

      <button
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          border: "none",
          background: "#2563EB",
          color: "#FFF",
          fontSize: "22px",
        }}
      >
        👤
      </button>
    </header>
  );
}
