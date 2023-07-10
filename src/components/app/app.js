import React from "react";
import { businessList } from "../businessList/businessList";
import SearchBar from "../searchBar/searchBar";
import Business from "../business/business";
import styles from "./app.module.css";

class App extends React.Component {
  searchYELP(term, location, sortBy) {
    console.log(`Searching YELP with ${term}, ${location}, ${sortBy}.`);
  }
  render() {
    return (
      <div className={styles.App}>
        <h1>Ravenous</h1>
        <SearchBar searchYELP={this.searchYELP} />
        <div className={styles.List}>
          {businessList.map((business, index) => (
            <Business key={index} {...business} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
