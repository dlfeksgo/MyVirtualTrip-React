// import { useCallback, useEffect, useState } from "react";
// import CheckList from "./components/CheckList/CheckList";
// import Counter from "./components/Counter";
// import Header from "./components/Header/Header";
// import OrderList from "./components/Order/OrderList";
// import Template from "./components/Template";
// import { RecoilRoot } from "recoil";

// function App() {
//   console.log("App Render");
//   return (
//     <RecoilRoot>
//       {/* <Template>
//         <Header />
//         <CheckList />
//       </Template> */}
//       {/* <Counter />
//        */}
//       <OrderList />
//     </RecoilRoot>
//   );
// }

// export default App;

import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredListState, pickUpOrders, testState } from "./atoms/order";
import OrderItem from "./components/Order/OrderItem";
import Filter from "./components/Order/Filter";
import Form from "./components/Order/Form";

const App = () => {
  const filteredList = useRecoilValue(filteredListState);
  return (
    <>
      <Form />
      <Filter />
      <ul className="border border-gray-100 p-4">
        {filteredList.map((id) => (
          <OrderItem key={id} orderId={id} />
        ))}
      </ul>
    </>
  );
};

export default App;
