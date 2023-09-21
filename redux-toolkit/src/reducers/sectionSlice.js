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
      return [
        ...state,
        {
          id: uuidv4(),
          type: inputType,
          name: name,
          title: title,
          itemList: [],
        },
      ];
    },
    addItem: (state, action) => {
      const { id, content } = action.payload;

      return state.map((v) =>
        v.id === id
          ? {
              ...v,
              itemList: [
                ...v.itemList,
                {
                  id: uuidv4(),
                  content: content,
                  status: false,
                },
              ],
            }
          : v
      );
    },
    updateItemContent: (state, action) => {
      return state.map((v) =>
        v.id === action.sectionId
          ? {
              ...v,
              itemList: v.itemList.map((v) =>
                v.id === action.id ? { ...v, content: action.value } : v
              ),
            }
          : v
      );
    },
    updateItemChecked: (state, action) => {
      return state.map((v) =>
        v.id === action.sectionId
          ? {
              ...v,
              itemList: v.itemList.map((v) =>
                v.id === action.id ? { ...v, status: action.status } : v
              ),
            }
          : v
      );
    },
    deleteItem: (state, action) => {
      return state.map((v) =>
        v.id === action.sectionId
          ? {
              ...v,
              itemList: v.itemList.filter((v) => v.id !== action.id),
            }
          : v
      );
    },
  },
});

export default sectionSlice;

export const { addItem } = sectionSlice.actions;
