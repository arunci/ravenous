import React, { useState } from "react";
import styles from "./search.module.css";

const SearchBar = ({ searchYELP }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "highest_rated",
    "Most Reviewed": "most_reviewed",
  };

  const getSortByClass = (sortByOption) => {
    return sortBy === sortByOption ? styles.active : "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchYELP(term, location, sortBy);
  };

  const renderSortByOptions = () =>
      Object.keys(sortByOptions).map((sortByOption) => {
        const sortByOptionValue = sortByOptions[sortByOption];
        return (
            <li
                key={sortByOptionValue}
                className={getSortByClass(sortByOptionValue)}
                onClick={() => handleSortByChange(sortByOptionValue)}
            >
              {sortByOption}
            </li>
        );
      });

  return (
      <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className={styles.SearchBarFields}>
          <input
              type="text"
              placeholder="Search Business"
              onChange={handleTermChange}
          />
          <input
              type="text"
              placeholder="Where?"
              onChange={handleLocationChange}
          />
        </div>
        <div className={styles.SearchBarSubmit}>
          <button onClick={handleSearch}>Let's Go</button>
        </div>
      </div>
  );
};

export default SearchBar;
