import React from "react";
import styles from "./businessList.module.css"
import Business from "../business/business";

const BusinessList = () => {
  return (
    <div className={styles.BusinessList}>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
};

export default BusinessList;
