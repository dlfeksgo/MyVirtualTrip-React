import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>여행을 떠나요 ✈️</h1>
      <span>useReducer</span>
    </header>
  );
};

export default Header;
