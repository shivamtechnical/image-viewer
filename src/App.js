import React from "react";
import { data } from "./Data";
import "./index.css";

function App() {
  return (
    <>
      <div className="iii">
        <div className="image">
          <img src={require("./imageg/hills-615429__340.jpg")} alt="" />
        </div>

        <div className="slides">
          {data.map((item) => (
            <img className="img" key={item.id} src={item.img} alt="/" />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
