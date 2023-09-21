import React from "react";
import Form from "./Form/Form";
import Section from "./Section/Section";
import styles from "./CheckList.module.css";

import { useDispatch, useSelector } from "react-redux";

const CheckList = () => {
  console.log("CheckList");

  const sectionList = useSelector((state) => state.section);
  const dispatch = useDispatch();

  const handleCreateSection = (inputType) => {
    const name = prompt("카테고리 이름을 입력해주세요.");
    if (!name) {
      return;
    } else if (name.trim().length === 0) {
      return alert("1글자 이상 입력해주세요.");
    }

    const title = prompt("카테고리를 설명할 제목을 입력해주세요.");
    if (!title) {
      return;
    } else if (title.trim().length === 0) {
      return alert("1글자 이상 입력해주세요.");
    }

    dispatch({ type: "section/addSection", inputType, name, title });
  };

  return (
    <div className={styles.container}>
      <aside className={styles.btn}>
        <button onClick={() => handleCreateSection("text")}>기본형</button>
        <button onClick={() => handleCreateSection("check")}>체크형</button>
      </aside>
      <main className={styles.main}>
        {sectionList.map((v, idx) => {
          if (idx === 0) {
            return null;
          }
          return <Section key={v.id} section={v} />;
        })}
      </main>
      <Form />
    </div>
  );
};

export default CheckList;
