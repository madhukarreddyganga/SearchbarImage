import React from "react";

class DateDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  render() {
    const generalFormat = new Date().toLocaleDateString(); //Date:7/12/2020,
    //TimeZone EST
    const EST = new Date().toString(); //Sun Jul 12 2020 22:00:59 GMT-0400 (Eastern Daylight Time),
    //UTC Timezone
    const UTC = new Date().toUTCString(); //Mon, 13 Jul 2020 02:08:40 GMT
    //GMT FORMAT
    const GMT = new Date().toGMTString();

    return (
      <div>
        <h5>My Time:{this.state.time}</h5>
        <h5>
          <br />
          Eastern Standard Time: {EST}
          <br />
          Green Mediterian Time:{GMT}
          <br />
          Universal Time:{UTC}
          <br />
          generalFormat:{generalFormat}
        </h5>
      </div>
    );
  }
}

export default DateDisplay;
