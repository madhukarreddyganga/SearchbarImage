import React, { Component } from "react";
import SeasonDisplay from "./seasonDisplay";
import Loading from "./loading";
class Location extends Component {
  constructor() {
    super();
    this.state = { lat: null, longitude: null, errorMessage: null };
  }

  //Data loading...!
  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => {
        this.setState({
          errorMessage: error.message
        });
      }
    );
  };

  render() {
    if (this.state.lat && this.state.longitude && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay latitude={this.state.lat} />
        </div>
      );
    }
    if (!this.state.lat && !this.state.longitude && this.state.errorMessage) {
      return <span>ErrorMessage:{this.state.errorMessage}</span>;
    }
    return (
      <div>
        <Loading message="Please accept location request" />
      </div>
    );
  }
}
export default Location;
