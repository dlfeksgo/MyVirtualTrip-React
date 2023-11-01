import React, { memo } from "react";
import {
  StatusFilters,
  filterSelector,
  useFilterAction,
} from "../../atoms/filter";
import { useRecoilState, useSetRecoilState } from "recoil";

const Filter = () => {
  console.log("Filter Render");
  const [filter, setFilter] = useRecoilState(filterSelector);

  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    // const handleClick = () => dispatch(statusFilterChanged(value));
    const handleClick = () => setFilter(value);
    // const active = value === status ? true : false;

    return (
      <li key={key}>
        <button onClick={handleClick}>{value}</button>
      </li>
    );
  });

  return <ul className="flex gap-1 mb-4">{renderedFilters}</ul>;
};

export default memo(Filter);
