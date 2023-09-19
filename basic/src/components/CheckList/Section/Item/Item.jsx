import React, { useCallback, useEffect, useState } from 'react';
import { useInput } from '../../../../hooks/useInput';

const Item = ({ section, item, onChangeItem }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [value, handler] = useInput(item.content);

	const handleUpdate = () => {
		setIsEdit(false);
		onChangeItem((prev) =>
			prev.map((v) =>
				v.id === section.id
					? {
							...v,
							itemList: v.itemList.map((v) =>
								v.id === item.id ? { ...v, content: value } : v
							),
					  }
					: v
			)
		);
	};

	const handleCheck = (e) => {
		onChangeItem((prev) =>
			prev.map((v) =>
				v.id === section.id
					? {
							...v,
							itemList: v.itemList.map((v) =>
								v.id === item.id ? { ...v, status: e.target.checked } : v
							),
					  }
					: v
			)
		);
	};

	const handleDelete = () => {
		onChangeItem((prev) =>
			prev.map((v) =>
				v.id === section.id
					? {
							...v,
							itemList: v.itemList.filter((v) => v.id !== item.id),
					  }
					: v
			)
		);
	};

	return (
		<div>
			{isEdit ? (
				<input type="text" value={value} onChange={handler}></input>
			) : (
				<label>
					{section.type === 'check' && (
						<input
							type="checkbox"
							checked={item.status}
							onChange={handleCheck}
						/>
					)}
					<span>{item.content}</span>
				</label>
			)}
			{isEdit ? (
				<div>
					<button onClick={handleUpdate}>수정완료</button>
				</div>
			) : (
				<div>
					<button onClick={() => setIsEdit(true)}>수정</button>
					<button onClick={handleDelete}>삭제</button>
				</div>
			)}
		</div>
	);
};

export default Item;
