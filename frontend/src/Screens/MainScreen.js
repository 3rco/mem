import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AppScreen from "../Screens/AppScreen";
import MusicScreen from "../Screens/MusicScreen";

import { useState } from "react";
export default function MainScreen() {
  const [mainScreen, setMainScreen] = useState("home");
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fcf5c7",
          borderRadius: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Navbar />
        {mainScreen === "home" && <AppScreen />}
        {mainScreen === "music" && <MusicScreen />}
        {/* {mainScreen === "home" && <Screen />}
        {mainScreen === "music" && <MusicScreen />}
        {mainScreen === "album" && <>album</>}
        {mainScreen === "blog" && <>blog</>}
        {mainScreen === "games" && <>games</>} */}
        <Footer setMainScreen={setMainScreen} />
      </div>
    </>
  );
}
