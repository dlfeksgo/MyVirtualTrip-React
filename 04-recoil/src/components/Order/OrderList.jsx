import React from "react";
import Filter from "./Filter";
import { useRecoilValue } from "recoil";
import { filteredListState, makeOrderAction } from "../../atoms/order";
import OrderItem from "./OrderItem";

function OrderList() {
  console.log("OrderList Render");
  const filteredList = useRecoilValue(filteredListState);
  // const filteredList = makeOrderAction();
  console.log(filteredList);
  return (
    <>
      <Filter />
      <ul className="border border-gray-100 p-4">
        {/* {filteredList.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))} */}
      </ul>
    </>
  );
}

export default OrderList;
