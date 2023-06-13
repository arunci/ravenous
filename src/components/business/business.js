import React from "react";
import styles from "./business.module.css";

const Business = (props) => {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={props.imageSrc} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAdress}>
          <p>{props.address}</p>
          <p>{props.city}</p>
          <p>{`${props.state} ${props.zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{props.category}</h3>
          <h3 className={styles.rating}>{`${props.rating} stars`}</h3>
          <p>{`${props.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
