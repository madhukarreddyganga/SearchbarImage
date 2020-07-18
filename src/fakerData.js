import React from "react";

const FData = props => {
  return (
    <div className="ui comments">
      <div className="comment">
        <span> FirstName:{props.FirstName}</span> |
        <span> Country:{props.Address}</span> |
        <br />
        <span> City:{props.City}</span> | <span> Zipcode: {props.zipcode}</span>
        <br />
        <img className="ui tiny image" src={props.Image} alt="Error" />
        <br />
        <span> Commerce:{props.Commerce}</span> |
        <br />
        <span>Date: {props.Month}</span> |
        <span> Localization:{props.Language}</span>
        {/* <img src="/images/avatar/small/elliot.jpg" alt="error" /> */}
      </div>
    </div>
  );
};

export default FData;
