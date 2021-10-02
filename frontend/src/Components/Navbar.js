import Clock from "react-live-clock";

export default function Navbar() {
  return (
    <div
      style={{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#f9eea7",
        height: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ paddingLeft: 20 }}>Ercan Ünal</div>
      <div style={{ paddingRight: 20 }}>
        <Clock format={"HH:mm"} ticking={true} />
      </div>
    </div>
  );
}
