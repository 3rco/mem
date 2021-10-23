import React, { useEffect } from "react";
import axios from "axios";

export default function MusicScreen() {
  useEffect(() => {
    axios
      .get("https://api.radioparadise.com/api/get_block?info=true", {
        mode: "no-cors",
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div
      style={{
        height: (window.innerHeight * 4) / 5,
        backgroundColor: "#FCF5C7",
        diplay: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {" "}
      <img src={"https://img.radioparadise.com/covers/l/B000002V2R.jpg"} />
      <audio controls autoPlay>
        <source src="https://audio-geo.radioparadise.com/blocks/chan/0/1/2206437-2206442.m4a" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
