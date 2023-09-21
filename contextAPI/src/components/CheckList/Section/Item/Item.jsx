import React, { useState } from "react";
import { useInput } from "../../../../hooks/useInput";
import MyButton from "../../../MyButton/MyButton";
import styles from "./Item.module.css";
import classnames from "classnames/bind";
import { useSectionDispatch } from "../../../../context/Section";

const cm = classnames.bind(styles);

const Item = ({ section, item }) => {
  console.log("Item");

  const [isEdit, setIsEdit] = useState(false);
  const [value, handler] = useInput(item.content);
  const dispatch = useSectionDispatch();

  const handleUpdate = () => {
    console.log("handleUpdate");
    setIsEdit(false);
    dispatch({
      type: "UPDATE_ITEM_CONTENT",
      sectionId: section.id,
      id: item.id,
      value,
    });
  };

  const handleCheck = (e) => {
    console.log("handleCheck");
    dispatch({
      type: "UPDATE_ITEM_CHECKED",
      sectionId: section.id,
      id: item.id,
      status: e.target.checked,
    });
  };

  const handleDelete = () => {
    console.log("handleDelete");
    dispatch({ type: "DELETE_ITEM", sectionId: section.id, id: item.id });
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
