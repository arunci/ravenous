import React from "react";
import hamburger from "./hamburger.jpeg";
class Business extends React.Component {
  constructor() {
    super();
    this.state = {
      image: hamburger,
      name: "La Tejera",
      address: "Calle Mariantonios",
      city: "San José de la Vega",
      state: "Murcia",
      zipcode: "30570",
      category: "Restaurant",
      rating: "5",
      review_count: "23",
    };
  }

  render() {
    return (
      <div>
        <h1>La Tejera</h1>
        <img src={this.state.image} alt="La Wave!" />
      </div>
    );
  }
}

export default Business;
