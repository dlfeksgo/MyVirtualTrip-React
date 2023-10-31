import { createSlice } from "@reduxjs/toolkit";
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

const sectionSlice = createSlice({
  name: "section",
  initialState: sectionList,
  reducers: {
    addSection: (state, action) => {
      const { inputType, name, title } = action.payload;
      state.push({
        id: uuidv4(),
        type: inputType,
        name: name,
        title: title,
        itemList: [],
      });
    },
    addItem: (state, action) => {
      const { id, content } = action.payload;
      const section = state.find((v) => v.id === id);
      section.itemList.push({
        id: uuidv4(),
        content: content,
        status: false,
      });
    },
    updateItemContent: (state, action) => {
      const section = state.find((v) => v.id === action.sectionId);
      const item = section.itemList.find((v) => v.id === action.id);
      item.content = action.value;
    },
    updateItemChecked: (state, action) => {
      const section = state.find((v) => v.id === action.sectionId);
      const item = section.itemList.find((v) => v.id === action.id);
      item.status = action.status;
    },
    deleteItem: (state, action) => {
      console.log(action);
      const section = state.find((v) => v.id === action.sectionId);
      section.itemList = section.itemList.filter((v) => v.id !== action.id);
    },
  },
});

export default sectionSlice;

export const { addItem } = sectionSlice.actions;
