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
      return [
        ...state,
        {
          id: uuidv4(),
          type: action.inputType,
          name: action.name,
          title: action.title,
          itemList: [],
        },
      ];
    },
    addItem: (state, action) => {
      return state.map((v) =>
        v.id === action.id
          ? {
              ...v,
              itemList: [
                ...v.itemList,
                {
                  id: uuidv4(),
                  content: action.content,
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
