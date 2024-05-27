import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  roast: string;
  bitterness: string;
  sourness: string;
  country: string;
  coffeeType: string;
  discount: boolean;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [roast, setRoast] = useState<string>('');
  const [bitterness, setBitterness] = useState<string>('');
  const [sourness, setSourness] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [coffeeType, setCoffeeType] = useState<string>('');
  const [discount, setDiscount] = useState<boolean>(false);

  const handleFilterChange = () => {
    const filters: Filters = {
      roast,
      bitterness,
      sourness,
      country,
      coffeeType,
      discount,
    };
    onFilterChange(filters);
  };

  return (
    <div className="filter">
      <h2>Фильтр</h2>
      <label>Зёрна кофе (1-5):</label>
      <input type="number" min="1" max="5" value={roast} onChange={(e) => setRoast(e.target.value)} />
      
      <label>Горчинка:</label>
      <select value={bitterness} onChange={(e) => setBitterness(e.target.value)}>
        <option value="">Любая</option>
        <option value="1">Слабая</option>
        <option value="2">Средняя</option>
        <option value="3">Сильная</option>
      </select>

      <label>Кислинка:</label>
      <select value={sourness} onChange={(e) => setSourness(e.target.value)}>
        <option value="">Любая</option>
        <option value="1">Очень слабая</option>
        <option value="2">Слабая</option>
        <option value="3">Средняя</option>
        <option value="4">Сильная</option>
      </select>

      <label>Страна происхождения:</label>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Любая</option>
        <option value="Колумбия">Колумбия</option>
        <option value="Перу">Перу</option>
        <option value="Танзания">Танзания</option>
        <option value="Бурунди">Бурунди</option>
        <option value="Вьетнам">Вьетнам</option>
        <option value="Индия">Индия</option>
        <option value="Кения">Кения</option>
        <option value="Бразилия">Бразилия</option>
        <option value="Эфиопия">Эфиопия</option>
        <option value="Гондурас">Гондурас</option>
      </select>

      <label>Вид кофейного дерева:</label>
      <select value={coffeeType} onChange={(e) => setCoffeeType(e.target.value)}>
        <option value="">Любой</option>
        <option value="Арабика">Арабика</option>
        <option value="Робуста">Робуста</option>
        <option value="Робуста + Арабика">Арабика + Робуста</option>
      </select>

      <label>
        <input type="checkbox" checked={discount} onChange={(e) => setDiscount(e.target.checked)} />
        Скидка
      </label>

      <button onClick={handleFilterChange}>Применить фильтр</button>
    </div>
  );
};

export default Filter;
