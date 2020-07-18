import React, { Component } from "react";
import FData from "./fakerData";
import Card from "./card";
import Faker from "faker";
import Location from "./location";
import DateDisplay from "./date";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="summer">
        <Card>
          <FData
            FirstName={Faker.name.firstName()}
            Address={Faker.address.country()}
            Detail={Faker.lorem.sentence()}
            zipcode={Faker.address.zipCode()}
            Image={Faker.image.avatar()}
            City={Faker.address.citySuffix()}
            Commerce={Faker.commerce.color()}
            Month={Faker.date.month()}
            Language={Faker.locale}
          />
          <DateDisplay />
          <Location />
        </Card>
        <Card>
          <FData
            FirstName={Faker.name.firstName()}
            Address={Faker.address.country()}
            Detail={Faker.lorem.sentence()}
            zipcode={Faker.address.zipCode()}
            Image={Faker.image.avatar()}
            City={Faker.address.citySuffix()}
            Commerce={Faker.commerce.color()}
            Month={Faker.date.month()}
            Language={Faker.locale}
          />
          <DateDisplay />
          <Location />
        </Card>
        <Card>
          <FData
            FirstName={Faker.name.firstName()}
            Address={Faker.address.country()}
            zipcode={Faker.address.zipCode()}
            Image={Faker.image.avatar()}
            City={Faker.address.citySuffix()}
            Commerce={Faker.commerce.color()}
            Month={Faker.date.month()}
            Language={Faker.locale}
          />
          <DateDisplay />
          <Location />
        </Card>
      </div>
    );
  }
}
export default App;
