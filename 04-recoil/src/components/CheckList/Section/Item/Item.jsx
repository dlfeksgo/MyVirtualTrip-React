import React, { useState } from "react";
import { useInput } from "../../../../hooks/useInput";
import MyButton from "../../../MyButton/MyButton";
import styles from "./Item.module.css";
import classnames from "classnames/bind";
import { useSetRecoilState } from "recoil";
import { sectionState } from "../../../../atoms/section";
import { produce } from "immer";

const cm = classnames.bind(styles);

const Item = ({ section, item }) => {
  const setSection = useSetRecoilState(sectionState);
  const [isEdit, setIsEdit] = useState(false);
  const [value, handler] = useInput(item.content);

  const handleUpdate = () => {
    setIsEdit(false);
    setSection(
      produce((draft) => {
        const targetSection = draft.find((v) => v.id === section.id);
        const targetItem = targetSection.itemList.find((v) => v.id === item.id);
        targetItem.content = value;
      })
    );
  };

  const handleCheck = (e) => {
    setSection(
      produce((draft) => {
        const targetSection = draft.find((v) => v.id === section.id);
        const targetItem = targetSection.itemList.find((v) => v.id === item.id);
        targetItem.status = e.target.checked;
      })
    );
  };

  const handleDelete = () => {
    setSection(
      produce((draft) => {
        const targetSection = draft.find((v) => v.id === section.id);
        targetSection.itemList = targetSection.itemList.filter(
          (v) => v.id !== item.id
        );
      })
    );
  };

  return (
    <div className={cm("container")}>
      {isEdit ? (
        <input type="text" value={value} onChange={handler}></input>
      ) : (
        <label className={cm("label")}>
          {section.type === "check" && (
            <input
              type="checkbox"
              checked={item.status}
              onChange={handleCheck}
            />
          )}
          <span className={cm(`${item.status && "complete"}`)}>
            {item.content}
          </span>
        </label>
      )}
      {isEdit ? (
        <div>
          <button onClick={handleUpdate}>수정완료</button>
        </div>
      ) : (
        <div className={cm("btn")}>
          <MyButton text={"수정"} onClick={() => setIsEdit(true)} />
          <MyButton type={"delete"} text={"삭제"} onClick={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default Item;
