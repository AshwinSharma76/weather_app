import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import VideoPlayer from "./VideoPlayer";

const NavBar = () => {
  let [value, updatevalue] = useState("");
  let [data, updateData] = useState({});

  async function getData(city) {
    try {
      let res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=3acf36feb44d493898d91944250307&q=${city}&aqi=yes`
      );
      updateData(res.data);
    } catch (error) {
      console.log("no data found");
      alert("no data found");
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log(`Latitude: ${lat}, Longitude: ${lon}`);

          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );

            const data = response.data;

            const cityName =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              "";

            updatevalue(cityName);
            getData(cityName);
          } catch (err) {
            console.log("Failed to fetch location name");
          }
        },
        (err) => {
          console.log(`Geolocation error: ${err.message}`);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    getData(value);
  }
  return (
    <>
      <div id="video">
        <div id="navbar">
          <img src="/cloudy.png" alt="logo" id="logoImg" />

          <div style={{ display: "flex", alignItems: "center" }}>
            <form onSubmit={handleSearch}>
              <input
                id="searchfield"
                type="text"
                name="value"
                value={value}
                placeholder="Search"
                onChange={(e) => {
                  updatevalue(e.target.value);
                }}
              />
            </form>

            <img
              src="/search.png"
              alt="search"
              id="searchIcon"
              onClick={handleSearch}
            />
          </div>
        </div>

        <VideoPlayer props={data} />
      </div>
    </>
  );
};
export default NavBar;
