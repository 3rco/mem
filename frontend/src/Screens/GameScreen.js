import React from 'react'

export default function GameScreen() {
    return (
        <div style={{
            height: (window.innerHeight * 7) / 10,
            backgroundColor: "#FCF5C7",
            padding: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflowY: "scroll",
          }}> 
            game screen
        </div>
    )
}
