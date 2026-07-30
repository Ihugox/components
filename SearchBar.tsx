export default function SearchBar() {
  return (
    <div style={{ padding: "16px" }}>
      <input
        type="text"
        placeholder="🔍 Pesquisar time ou campeonato..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #334155",
          backgroundColor: "#1E293B",
          color: "#FFFFFF",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
