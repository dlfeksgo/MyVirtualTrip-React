import React, { useState } from 'react';
import Select from './Select';
import { useInput } from '../../../hooks/useInput';

const Form = ({ sectionList, dispatch }) => {
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
		dispatch({ type: 'ADD_ITEM', id: sectionId, content });
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
