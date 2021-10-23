import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function AppContainer({ header, name, url }) {
  return (
    <div
      style={{
        borderRadius: 10,
        margin: 10,
        backgroundColor: "#f9eea7",
      }}
    >
      <div
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: "#f3e06a",
          padding: 3,
        }}
      >
        {header}
      </div>
      <Stack direction="row" spacing={2} style={{ padding: 20 }}>
        {url && url.map((u) => <Avatar alt="hehe" src={u} />)}
      </Stack>
    </div>
  );
}
