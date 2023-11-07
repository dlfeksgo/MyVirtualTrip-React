import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  useSetRecoilState,
} from "recoil";
import { filterState } from "./filter";
import { v4 as uuid } from "uuid";

export const orderState = atom({
  key: "order",
  default: [
    {
      id: 1,
      name: "치킨 🍗",
      isCompleted: false,
    },
    {
      id: 2,
      name: "햄버거 🍔",
      isCompleted: false,
    },
    {
      id: 3,
      name: "타코 🌮",
      isCompleted: true,
    },
  ],
});

// export const filteredListState = selector({
//   key: "filteredList",
//   get: ({ get }) => {
//     const { status } = get(filterState);
//     const orders = get(orderState);
//     switch (status) {
//       case "전체":
//         return orders;
//       case "픽업대기":
//         return orders.filter((item) => item.isCompleted);
//       case "준비중":
//         return orders.filter((item) => !item.isCompleted);
//       default:
//         return orders;
//     }
//   },
// });

export const filteredListState = selector({
  key: "filteredList",
  get: ({ get }) => {
    console.log("filteredListState!");
    const { status } = get(filterState);
    const orders = get(orderState);
    switch (status) {
      case "전체":
        return orders.map((order) => order.id);
      case "픽업대기":
        return orders
          .filter((order) => order.isCompleted)
          .map((order) => order.id);
      case "준비중":
        return orders
          .filter((order) => !order.isCompleted)
          .map((order) => order.id);
      default:
        return orders.map((order) => order.id);
    }
  },
});

export const orderItem = atomFamily({
  key: "orderItem",
  default: selectorFamily({
    key: "orderItem/id",
    get:
      (id) =>
      ({ get }) => {
        console.log("orderItem!");
        const items = get(orderState);
        const item = items.find((item) => item.id === id);
        return item;
      },
  }),
});

export const useOrderAction = (id) => {
  console.log("호출");
  const setOrder = useSetRecoilState(orderItem(id));
  const update = (id) => {
    setOrder((prev) =>
      prev.map((v) => (v.id === id ? { ...v, isCompleted: !v.isCompleted } : v))
    );
  };
  return { update };
};

export const createOrder = selector({
  key: "createOrder",
  get: ({ get }) => get(orderState),
  set: ({ set }, newData) => {
    console.log("createOrder");
    set(orderState, (prev) => [...prev, { id: uuid(), ...newData }]);
  },
});
