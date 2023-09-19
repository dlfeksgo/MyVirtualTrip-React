import React, { useCallback } from 'react';

const Select = ({ data, value, onChangeOption }) => {
	const handleChangeOption = useCallback(
		(e) => onChangeOption(e.target.value),
		[onChangeOption]
	);
	return (
		<select value={value} onChange={handleChangeOption}>
			{data.map((section) => {
				return (
					<option key={section.id} value={section.name}>
						{section.name}
					</option>
				);
			})}
		</select>
	);
};

export default Select;
