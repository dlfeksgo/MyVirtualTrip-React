import React, { memo } from "react";
import { orderItem } from "../../atoms/order";
import { useRecoilState } from "recoil";

const OrderItem = ({ orderId }) => {
  console.log("OrderItem Render");
  // const { update } = useOrderAction(orderId);
  const [order, setOrder] = useRecoilState(orderItem(orderId));

  const handleItemClick = () => {
    // update(order.id);
    // setOrder((prev) =>
    //   prev.map((v) =>
    //     v.id === order.id ? { ...v, isCompleted: !v.isCompleted } : v
    //   )
    // );
    setOrder([{ ...order, isCompleted: !order.isCompleted }]);
  };

  return (
    <li onClick={handleItemClick}>
      {order.isCompleted ? "🎁 픽업대기" : order.name}
    </li>
  );
};

export default OrderItem;
