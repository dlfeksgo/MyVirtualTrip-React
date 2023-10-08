import React, { useEffect, useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import { useLocation, useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import styles from "./Plan.module.css";
import classnames from "classnames/bind";
const cm = classnames.bind(styles);

const Plan = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleClick = () => {
    navigate("/plan/new");
  };

  return (
    <div className={cm("container", { dash: !state })}>
      {!state && (
        <div className={cm("blank")}>
          <p>😢 상세 일정이 비어있어요.</p>
          <MyButton type="add" text={"등록하기"} onClick={handleClick} />
        </div>
      )}
      {state && (
        <div className={cm("content-wrapper")}>
          <div>
            <p className={cm("date")}>{state.plan.date}</p>
            <p className={cm("title")}>{state.plan.title}</p>
          </div>
          <BiEditAlt className={cm("edit")} />
        </div>
      )}
    </div>
  );
};

export default Plan;
