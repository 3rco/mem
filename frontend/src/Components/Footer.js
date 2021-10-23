import {
  MdWeb,
  MdMusicNote,
  MdCameraEnhance,
  MdHome,
  MdGamepad,
} from "react-icons/md";
import Grid from "@mui/material/Grid";

export default function Footer({ setMainScreen }) {
  return (
    <Grid
      item
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#f3e06a",
        width: "100%",
        height: 75,
        minHeight: 53,
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "orange",
          border: "solid 1px orange",
          borderRadius: "50%",
        }}
      >
        <MdHome
          size={27}
          style={{ cursor: "pointer", padding: 5 }}
          color={"yellow"}
          onClick={() => {
            setMainScreen("home");
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "orange",
          border: "solid 1px orange",
          borderRadius: "50%",
        }}
      >
        <MdMusicNote
          size={27}
          style={{ cursor: "pointer", padding: 5 }}
          color={"yellow"}
          onClick={() => {
            setMainScreen("music");
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "orange",
          border: "solid 1px orange",
          borderRadius: "50%",
        }}
      >
        <MdCameraEnhance
          size={27}
          style={{ cursor: "pointer", padding: 5, textAlign: "center" }}
          color={"yellow"}
          onClick={() => {
            setMainScreen("album");
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: "orange",
          border: "solid 1px orange",
          borderRadius: "50%",
        }}
      >
        <MdWeb
          size={27}
          style={{ cursor: "pointer", padding: 5 }}
          color={"yellow"}
          onClick={() => {
            setMainScreen("blog");
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "orange",
          border: "solid 1px orange",
          borderRadius: "50%",
        }}
      >
        <MdGamepad
          size={27}
          style={{ cursor: "pointer", padding: 5 }}
          color={"yellow"}
          onClick={() => {
            setMainScreen("games");
          }}
        />
      </div>
    </Grid>
  );
}
