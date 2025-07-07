import React from "react";
import DataTemplate from "./DataTemplate";
var DataBox = ({ props }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  if (!props || !props.location || !props.current) {
    return (
      <div id="overlape">
        <center>
          <p style={{ color: "white", fontSize: "20px" }}>Loading...</p>
        </center>
      </div>
    );
  }
  return (
    <>
      <div id="overlape">
        <div id="headDiv">
          <img src="/locationIcon.png" alt="icon" />
          <label style={{ textAlign: "center", margin: "0" }}>
            {props.location.name}
          </label>
        </div>
        <div id="headDiv">
          <p id="dateTime">{formattedDate}</p>
          <br />
        </div>
        <div id="tempheadDiv">
          <h1 id="temprature">&nbsp;{props.current.temp_c}°</h1>
        </div>
        <div id="tempheadDiv">
          <h1 id="weather">{props.current.condition.text}</h1>
          <img
            alt=""
            style={{ backgroundColor: "transparent", height: "30px" }}
            src={props.current.condition.icon}
          />
        </div>
        <DataTemplate
          url={"/wind.png"}
          heading={"Wind Speed"}
          data={props.current.wind_kph + " km/h"}
        />
        <DataTemplate
          url={"/humidity.png"}
          heading={"Humidity"}
          data={props.current.humidity + "%"}
        />
        <DataTemplate
          url={"/pressure.png"}
          heading={"Pressure"}
          data={props.current.pressure_mb + " millibar"}
        />
      </div>
    </>
  );
};
export default DataBox;
