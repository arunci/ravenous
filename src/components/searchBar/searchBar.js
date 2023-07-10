import React from "react";
import styles from "./search.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "highest_rated",
      "Most Reviewed": "most_reviewed",
    };
  }
  // apply active css style on  selected sorting options
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return styles.active;
    } else return "";
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearch(event) {
    this.props.searchYELP(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          // apply the style.active class to selected option
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }
  render() {
    return (
      <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className={styles.SearchBarFields}>
          <input
            type="text"
            placeholder="Search Business"
            onChange={this.handleTermChange}
          />
          <input
            type="text"
            placeholder="Where?"
            onChange={this.handleLocationChange}
          />
        </div>
        <div className={styles.SearchBarSubmit}>
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
