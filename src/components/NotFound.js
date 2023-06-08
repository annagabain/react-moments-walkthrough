import React from "react";
import styles from "../styles/NotFound.module.css";
import NoResultsImage from "../assets/no-results.png";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Asset src={NoResultsImage} message="Sorry, the page you're looking for doesn't exist" />
    </div>
  );
};

export default NotFound;