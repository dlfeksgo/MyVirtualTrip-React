import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  useSetRecoilState,
} from "recoil";
import { filterState } from "./filter";

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

const orderIdsState = atom({
  key: "orderIdsState",
  default: [],
});

// export const orderItemState = atomFamily({
//   key: 'orderItemState',
//   default: (id)=> {

//   }
// })

export const orderItem = atomFamily({
  key: "orderItem",
  default: selectorFamily({
    key: "orderItem/id",
    get:
      (id) =>
      ({ get }) => {
        const items = get(orderState);
        const item = items.filter((item) => item.id === id);
        return item;
      },
    set: ({ set }, newValue) => set(orderState, newValue),
  }),
});

// export const useOrderAction2 = () => {
//   const useOrderAction = () => {
//     console.log("useOrderAction");
//     const setOrder = useSetRecoilState(orderState);
//     const update = (id) =>
//       setOrder((prev) =>
//         prev.map((v) =>
//           v.id === id ? { ...v, isCompleted: !v.isCompleted } : v
//         )
//       );
//     return { update };
//   };
//   return useOrderAction;
// };

export const useOrderAction = () => {
  const setOrder = useSetRecoilState(orderState);

  const update = (id) => {
    setOrder((prev) =>
      prev.map((v) => (v.id === id ? { ...v, isCompleted: !v.isCompleted } : v))
    );
  };
  const create = (item) => setOrder((prev) => [...prev, item]);
  return { update, create };
};

// export const updateStatus = selector({
//   key: "updateStatus",
//   get: ({ get }) => get(orderState),
//   set: ({ set }, id) =>
//     set(orderState, (prev) =>
//       prev.map((v) => (v.id === id ? { ...v, isCompleted: !v.isCompleted } : v))
//     ),
// });
