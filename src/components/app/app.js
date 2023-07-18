import React from "react";
import { businessList } from "../businessList/businessList";
import { mySearch } from "../../utils/apiKey";
import SearchBar from "../searchBar/searchBar";
import Business from "../business/business";
import styles from "./app.module.css";

const App = () => {
  const searchYELP = (term, location, sortBy) => {
    console.log(`Searching YELP with ${term}, ${location}, ${sortBy}.`);
  };

  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar searchYELP={searchYELP} />
      <div className={styles.List}>
        {businessList.map((business, index) => (
          <Business key={index} {...business} />
        ))}
      </div>
    </div>
  );
};

export default App;
