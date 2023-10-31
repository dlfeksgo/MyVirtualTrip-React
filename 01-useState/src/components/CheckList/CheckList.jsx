import React, { useState } from 'react';
import Form from './Form/Form';
import Section from './Section/Section';
import { v4 as uuidv4 } from 'uuid';

const sectionList = [
	{
		id: uuidv4(),
		type: null,
		name: '선택',
		title: null,
		itemList: null,
	},
];

const CheckList = () => {
	const [section, setSection] = useState(sectionList);

	const handleCreateSection = (type) => {
		const name = prompt('카테고리 이름을 입력해주세요.');
		if (!name) {
			return;
		} else if (name.trim().length === 0) {
			return alert('1글자 이상 입력해주세요.');
		}

		const title = prompt('카테고리를 설명할 제목을 입력해주세요.');
		if (!title) {
			return;
		} else if (title.trim().length === 0) {
			return alert('1글자 이상 입력해주세요.');
		}

		setSection((sectionList) => [
			...sectionList,
			{
				id: uuidv4(),
				type,
				name,
				title,
				itemList: [],
			},
		]);
	};

	return (
		<>
			<aside>
				<button onClick={() => handleCreateSection('text')}>기본형</button>
				<button onClick={() => handleCreateSection('check')}>체크형</button>
			</aside>
			<main>
				{section.map((v, idx) => {
					if (idx === 0) {
						return null;
					}
					return <Section key={v.id} section={v} onChangeItem={setSection} />;
				})}
			</main>
			<Form sectionList={section} onAddItem={setSection} />
		</>
	);
};

export default CheckList;
