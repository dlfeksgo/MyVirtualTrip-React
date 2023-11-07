import React, { memo, useState } from "react";
import { useSetRecoilState } from "recoil";
import { createOrder, orderState } from "../../atoms/order";
import { v4 as uuid } from "uuid";

const Form = () => {
  console.log("Form Render");
  // const setOrder = useSetRecoilState(orderState);
  const setOrder = useSetRecoilState(createOrder);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCreate = () => {
    const newOrder = {
      name: text,
      isCompleted: false,
    };
    // setOrder((prev) => [...prev, newOrder]);
    setOrder(newOrder);
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
