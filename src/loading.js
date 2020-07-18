import React from "react";

const Loading = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui large text loader">{props.message} Loading..</div>
    </div>
  );
};
Loading.defaultProps = {
  message: "Loading...."
};

export default Loading;
