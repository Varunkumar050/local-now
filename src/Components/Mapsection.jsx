import React from "react";

const Mapsection = () => {

  return (

    <div className="map-box">

      <div className="map-search">
        🔍 Search this area
      </div>

      <div className="map-center">
        📍
      </div>

      <div className="map-marker marker-one">
        🟢
      </div>

      <div className="map-marker marker-two">
        🟢
      </div>

      <div className="map-marker marker-three">
        🔴
      </div>

      <div className="map-marker marker-four">
        🟢
      </div>

      <div className="user-location">
        🔵
      </div>

      <div className="map-label">
        Your Location
      </div>

    </div>
  );
};

export default Mapsection;