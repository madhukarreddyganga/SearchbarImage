import React from "react";

import "./styles.css";
const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold",
    icon: "snow flake"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonDisplay = props => {
  //const Da = new Date().toLocaleDateString(); //Date:7/12/2020,
  const Da = new Date().toDateString(); //Sun Jul 12 2020

  const Time = new Date().toLocaleTimeString();
  const season = getSeason(props.lat, Da, Time);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`sesonal-display ${season}`}>
      <i className={`icon-left big ${iconName} icon`} />
      <h5>
        Latitude:{props.latitude},<br /> Season : {season}
      </h5>
      <h4>Text:{text}</h4>
      <h5>
        Date:{Da},<br /> Time:{Time}
      </h5>
      <i className={`icon-right big ${iconName} icon`} />
    </div>
  );
};

export default seasonDisplay;
