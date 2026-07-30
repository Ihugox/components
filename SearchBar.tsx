export default function SearchBar() {
  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="🔎 Pesquisar jogo, time ou campeonato..."
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "14px",
          border: "1px solid #334155",
          background: "#101B2D",
          color: "#FFFFFF",
          fontSize: "16px",
          outline: "none",
        }}
      />
    </div>
  );
}
