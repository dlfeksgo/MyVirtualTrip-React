import React, { useState } from "react";
import styles from "./PlanForm.module.css";
import classnames from "classnames/bind";
import MyButton from "../MyButton/MyButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
const cm = classnames.bind(styles);

const PlanForm = () => {
  const [plan, setPlan] = useState({
    date: "",
    title: "",
    member: "",
    content: "",
  });
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };

  const handler = (e) => {
    setPlan((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    navigate("/", { state: { plan } });
  };

  return (
    <div className={cm("container")}>
      <h1>일정등록</h1>
      <form className={cm("form")}>
        <label htmlFor="date">날짜</label>
        <input type="date" id="date" value={plan.date} onChange={handler} />

        <label htmlFor="title">제목</label>
        <input type="text" id="title" value={plan.title} onChange={handler} />

        <label htmlFor="member">참여멤버</label>
        <input type="text" id="member" value={plan.member} onChange={handler} />

        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          cols="30"
          rows="10"
          value={plan.content}
          onChange={handler}
        ></textarea>
        <div>
          <MyButton text={"취소"} onClick={handleCancel} button />
          <MyButton text={"등록"} type="add" onClick={handleSumbit} />
        </div>
      </form>
    </div>
  );
};

export default PlanForm;
