import React from "react";
import BusinessList from "../businessList/businessList";
import styles from "./app.module.css"

const App = () => {
    return (
        <div className={styles.App}>
            <h1>Ravenous</h1>
            <BusinessList />
        </div>
    );
}

export default App;