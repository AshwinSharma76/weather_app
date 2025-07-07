import React from "react";
const DataTemplate = ({ url, heading, data }) => {
  if (data === "" || data === undefined) {
    return (
      <>
        <div id="dataRow">
          <img
            src={url}
            alt=""
            style={{ height: "50px", paddingLeft: "20px" }}
          />
          <h1 id="windSpeed" style={{ paddingRight: "20px" }}>
            Loading....
            <br />
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="dataRow">
          <img
            src={url}
            alt=""
            style={{ height: "50px", paddingLeft: "20px" }}
          />
          <h1 id="windSpeed" style={{ paddingRight: "20px" }}>
            {heading}
            <br />
            <span>{data}</span>
          </h1>
        </div>
      </>
    );
  }
};

export default DataTemplate;
