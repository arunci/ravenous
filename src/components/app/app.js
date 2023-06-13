import React from "react";
import { businessList } from "../businessList/businessList";
import SearchBar from "../searchBar/searchBar";
import Business from "../business/business";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
      <div className={styles.List}>
        {businessList.map((business) => (
          <Business {...business} />
        ))}
      </div>
    </div>
  );
};

export default App;
