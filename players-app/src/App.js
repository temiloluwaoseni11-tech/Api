import React from "react";
import PlayersList from "./component/Playerslist";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Football Players
      </h1>

      <PlayersList />
    </div>
  );
}

export default App;