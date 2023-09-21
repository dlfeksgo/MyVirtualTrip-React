import React from "react";
import styles from "./MyButton.module.css";
import classNames from "classnames/bind";

const css = classNames.bind(styles);

const MyButton = ({ type = "default", text, onClick }) => {
  return (
    <button className={css("btn", type)} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
