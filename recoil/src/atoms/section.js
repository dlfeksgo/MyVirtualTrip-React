import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

const sectionList = [
  {
    id: uuidv4(),
    type: null,
    name: "선택",
    title: null,
    itemList: null,
  },
];

export const sectionState = atom({
  key: "section",
  default: sectionList,
});
