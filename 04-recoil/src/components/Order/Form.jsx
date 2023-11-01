import React, { memo, useState } from "react";
import { useSetRecoilState } from "recoil";
import { orderState } from "../../atoms/order";
import { v4 as uuid } from "uuid";

const Form = () => {
  console.log("Form Render");
  const setOrder = useSetRecoilState(orderState);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCreate = () => {
    const newOrder = {
      id: uuid(),
      name: text,
      isCompleted: false,
    };
    // dispatch(orderSlice.actions.create(newOrder));
    setOrder((prev) => [...prev, newOrder]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="주문 내역을 입력해주세요."
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleCreate}>등록</button>
    </div>
  );
};

export default memo(Form);
