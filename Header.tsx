export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#0F172A",
        color: "#FFFFFF",
      }}
    >
      <h1>⚽ Football Pro Analyzer</h1>

      <button
        style={{
          background: "none",
          border: "1px solid #334155",
          color: "#FFFFFF",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        👤
      </button>
    </header>
  );
}
