import React from "react";
import styles from "./Template.module.css";

const Template = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Template;
