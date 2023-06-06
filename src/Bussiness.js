import React from "react";

class Business extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "",
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
    return <h2>{this.state.name}</h2>;
  }
}

export default Business;
