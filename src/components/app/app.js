import React, { useState } from "react";
import { searchBusiness } from "../../utils/yelp";
import SearchBar from "../searchBar/searchBar";
import Business from "../business/business";
import styles from "./app.module.css";

const App = () => {
    const [businessList, setBusinessList] = useState([]);

    const searchYELP = async (term, location, sortBy) => {
        const result = await searchBusiness(term, location, sortBy);
        setBusinessList(result);
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
