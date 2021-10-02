import MainScreen from "./Screens/MainScreen";
import Grid from "@mui/material/Grid";
import "./app.css";
function App() {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={12}
        sm={6}
        md={3.5}
        style={{
          height: window.innerHeight - 20,
        }}
      >
        <MainScreen />
      </Grid>
    </Grid>
  );
}

export default App;
