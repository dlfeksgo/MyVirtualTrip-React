import React from "react";
import styles from "./MyButton.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const MyButton = ({ type = "default", text, onClick }) => {
  return (
    <button className={cn("btn", type)} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
