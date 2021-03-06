import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function MusicScreen() {
  const [data, setData] = useState({});
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    //getNowPlaying();
  }, [trigger]);

  /* const getNowPlaying = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "get",
      "https://cors-anywhere.herokuapp.com/https://api.radioparadise.com/api/now_playing"
    );

    xhr.onload = function () {
      console.log("burra",JSON.parse(this.response));
      setData(JSON.parse(this.response));
      setInterval(() => {
        setTrigger(!trigger);
      }, JSON.parse(this.response).time * 1000);
    };
    xhr.send();
  }; */

  axios.get('http://localhost:5000/radio')
  .then(function (response) {
    // handle success
    console.log("succcc",response);
  })
  .catch(function (error) {
    // handle error
    console.log("err",error);
  })
  .then(function (response) {
    // always executed
    console.log("always",response)
  });

  return (
    <div
      style={{
        height: (window.innerHeight * 7) / 10,
        backgroundColor: "#FCF5C7",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>{data.title}</h1>
        <h1 style={{ marginTop: 20 }}>{data.artist}</h1>
      </div>
      <div
        style={{
          width: "75%",
          margin: "auto",
        }}
      >
        <img
          src={data.cover}
          style={{ height: "100%", width: "100%" }}
          resizeMode={"cover"}
          alt="Loading..."
        />
      </div>
      <div style={{ textAlign: "center", margin: 10 }}>
        <audio controls autoPlay>
          <source src="http://stream.radioparadise.com/mp3-128" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
