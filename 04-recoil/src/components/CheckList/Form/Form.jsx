import React, { useState } from "react";
import Select from "./Select";
import styles from "./Form.module.css";
import { useInput } from "../../../hooks/useInput";
import MyButton from "../../MyButton/MyButton";
import { useRecoilState } from "recoil";
import { sectionState } from "../../../atoms/section";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [section, setSection] = useRecoilState(sectionState);
  const [content, handler, setContent] = useInput("");
  const [option, setOption] = useState(section[0].name);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (content.trim().length === 0) {
      return alert("내용을 입력해주세요.");
    }
    if (option === section[0].name) {
      return alert("카테고리를 선택해주세요.");
    }

    const sectionId = filteredSection(section, option);
    setSection((state) =>
      state.map((v) =>
        v.id === sectionId
          ? {
              ...v,
              itemList: [
                ...v.itemList,
                { id: uuidv4(), content, status: false },
              ],
            }
          : v
      )
    );
    setContent("");
    setOption(section[0].name);
  };

  return (
    <form className={styles.container} onSubmit={handleSumbit}>
      <Select data={section} value={option} onChangeOption={setOption} />
      <input type="text" value={content} onChange={handler} />
      <MyButton type={"add"} text={"추가하기"} />
    </form>
  );
};

const filteredSection = (sectionList, option) => {
  return sectionList.filter((v) => v.name === option).slice()[0].id;
};

export default Form;
