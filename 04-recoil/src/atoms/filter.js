import { atom, selector, useSetRecoilState } from "recoil";

export const StatusFilters = {
  All: "전체",
  Completed: "픽업대기",
  Uncompleted: "준비중",
};

export const filterState = atom({
  key: "filter",
  default: {
    status: StatusFilters.All,
  },
});

export const filterSelector = selector({
  key: "filterSelector",
  get: ({ get }) => get(filterState),
  set: ({ set }, status) => set(filterState, { status }),
});

// export const useFilterAction = () => {
//   const setFilter = useSetRecoilState(filterState);
//   const statusFilterChange = (status) => {
//     setFilter(() => ({ status }));
//   };

//   return { statusFilterChange };
// };
