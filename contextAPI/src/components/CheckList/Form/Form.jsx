import React, { useRef, useState } from "react";
import Select from "./Select";
import styles from "./Form.module.css";
import { useInput } from "../../../hooks/useInput";
import MyButton from "../../MyButton/MyButton";
import { useSectionDispatch, useSectionState } from "../../../context/Section";

const Form = () => {
  console.log("Form");
  const [content, handler, setContent] = useInput("");
  const sectionList = useSectionState();
  const dispatch = useSectionDispatch();
  const [option, setOption] = useState(sectionList[0].name);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (content.trim().length === 0) {
      return alert("내용을 입력해주세요.");
    }
    if (option === sectionList[0].name) {
      return alert("카테고리를 선택해주세요.");
    }
    const sectionId = filteredSection(sectionList, option);

    dispatch({ type: "ADD_ITEM", id: sectionId, content });
    setOption(sectionList[0].name);
    setContent("");
  };

  return (
    <form className={styles.container} onSubmit={handleSumbit}>
      <Select data={sectionList} value={option} onChangeOption={setOption} />
      <input type="text" value={content} onChange={handler} />
      <MyButton type={"add"} text={"추가하기"} />
    </form>
  );
};

const filteredSection = (sectionList, option) => {
  return sectionList.filter((v) => v.name === option).slice()[0].id;
};

export default Form;
