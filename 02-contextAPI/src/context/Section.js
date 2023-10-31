import { useReducer } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { sectionReducer } from "../reducer/section-reducer";
import { useContext } from "react";

const sectionList = [
  {
    id: uuidv4(),
    type: null,
    name: "선택",
    title: null,
    itemList: null,
  },
];

const sectionStateContext = createContext();
const sectionDispatchContext = createContext();

export const SectionProvier = ({ children }) => {
  const [section, dispatch] = useReducer(sectionReducer, sectionList);
  return (
    <sectionStateContext.Provider value={section}>
      <sectionDispatchContext.Provider value={dispatch}>
        {children}
      </sectionDispatchContext.Provider>
    </sectionStateContext.Provider>
  );
};

export const useSectionState = () => {
  return useContext(sectionStateContext);
};

export const useSectionDispatch = () => {
  return useContext(sectionDispatchContext);
};
