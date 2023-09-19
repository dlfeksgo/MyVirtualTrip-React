import React, { useState } from 'react';
import Select from './Select';
import { v4 as uuidv4 } from 'uuid';
import { useInput } from '../../../hooks/useInput';

const Form = ({ sectionList, onAddItem }) => {
	const [content, handler, setContent] = useInput('');
	const [option, setOption] = useState(sectionList[0].name);

	const handleSumbit = (e) => {
		e.preventDefault();
		if (content.trim().length === 0) {
			return alert('내용을 입력해주세요.');
		}
		if (option === sectionList[0].name) {
			return alert('카테고리를 선택해주세요.');
		}

		const sectionId = filteredSection(sectionList, option);

		onAddItem((prev) =>
			prev.map((v) =>
				v.id === sectionId
					? {
							...v,
							itemList: [
								...v.itemList,
								{ id: uuidv4(), content, status: false },
							],
					  }
					: v
			)
		);

		setContent('');
		setOption(sectionList[0].name);
	};

	return (
		<form onSubmit={handleSumbit}>
			<Select data={sectionList} value={option} onChangeOption={setOption} />
			<input type="text" value={content} onChange={handler} />
			<button>추가하기</button>
		</form>
	);
};

const filteredSection = (sectionList, option) => {
	return sectionList.filter((v) => v.name === option).slice()[0].id;
};

export default Form;
