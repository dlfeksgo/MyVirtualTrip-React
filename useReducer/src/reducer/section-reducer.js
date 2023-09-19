import { v4 as uuidv4 } from 'uuid';

const ADD_SECTION = 'ADD_SECTION';
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM_CONTENT = 'UPDATE_ITEM_CONTENT';
const UPDATE_ITEM_CHECKED = 'UPDATE_ITEM_CHECKED';
const DELETE_ITEM = 'DELETE_ITEM';

export const sectionReducer = (state, action) => {
	switch (action.type) {
		case ADD_SECTION: {
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
		}

		case ADD_ITEM: {
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
		}

		case UPDATE_ITEM_CONTENT: {
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
		}

		case UPDATE_ITEM_CHECKED: {
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
		}

		case DELETE_ITEM: {
			return state.map((v) =>
				v.id === action.sectionId
					? {
							...v,
							itemList: v.itemList.filter((v) => v.id !== action.id),
					  }
					: v
			);
		}

		default:
			throw new Error('존재하지 않는 타입');
	}
};

//indent
