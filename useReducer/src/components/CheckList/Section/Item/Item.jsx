import React, { useState } from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "./Item.module.css";
import MyButton from "../../../MyButton/MyButton";

const Item = ({ section, item, dispatch }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, handler] = useInput(item.content);

  const handleUpdate = () => {
    setIsEdit(false);
    dispatch({
      type: "UPDATE_ITEM_CONTENT",
      sectionId: section.id,
      id: item.id,
      value,
    });
  };

  const handleCheck = (e) => {
    dispatch({
      type: "UPDATE_ITEM_CHECKED",
      sectionId: section.id,
      id: item.id,
      status: e.target.checked,
    });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_ITEM", sectionId: section.id, id: item.id });
  };

  return (
    <div>
      {isEdit ? (
        <input type="text" value={value} onChange={handler}></input>
      ) : (
        <label>
          {section.type === "check" && (
            <input
              type="checkbox"
              checked={item.status}
              onChange={handleCheck}
            />
          )}
          <span>{item.content}</span>
        </label>
      )}
      {isEdit ? (
        <div>
          <button onClick={handleUpdate}>수정완료</button>
        </div>
      ) : (
        <div>
          <MyButton text={"수정"} onClick={() => setIsEdit(true)} />
          <MyButton type={"delete"} text={"삭제"} onClick={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default Item;
