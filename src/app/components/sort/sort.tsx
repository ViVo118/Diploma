import React from 'react';

interface SortProps {
  onSortChange: (sortOrder: string) => void;
}

const Sort: React.FC<SortProps> = ({ onSortChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sort"
    style={{marginBottom:'20px'}}>
      <label htmlFor="sort">Сортировать по цене: </label>
      <select id="sort" onChange={handleSortChange}>
        <option value="">Без сортировки</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
};

export default Sort;
