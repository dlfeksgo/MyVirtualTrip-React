import React, { memo } from "react";
import { orderItem, useOrderAction } from "../../atoms/order";
import { useRecoilState, useRecoilValue } from "recoil";

const OrderItem = ({ orderId }) => {
  console.log("OrderItem Render");
  const { update } = useOrderAction();
  const [[order], setOrder] = useRecoilState(orderItem(orderId));

  const handleItemClick = () => {
    // dispatch(orderSlice.actions.update(order.id));
    // update(order.id);
    setOrder((prev) =>
      prev.map((v) =>
        v.id === order.id ? { ...v, isCompleted: !v.isCompleted } : v
      )
    );
  };

  return (
    <li onClick={handleItemClick}>
      {order.isCompleted ? "🎁 픽업대기" : order.name}
    </li>
  );
};

export default OrderItem;
