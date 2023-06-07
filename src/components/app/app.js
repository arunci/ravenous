import React from "react";
import BusinessList from "../businessList/businessList";
import SearchBar from "../searchBar/searchBar";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
