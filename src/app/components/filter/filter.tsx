import { Filters } from '@/app/interfaces/interfaces';
import React, { useState } from 'react';
import Button from '../elements/button/button';
import './filter.css';

interface FilterProps {
  onFilterChange: (filters: Filters) => void;
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
      <p className= 'filter__option'>Степень обжарки:</p>
      <select value={roast} onChange={(e) => setRoast(e.target.value)}>
        <option value="">Любая</option>
        <option value="1">Очень слабая</option>
        <option value="2">Слабая</option>
        <option value="3">Средняя</option>
        <option value="4">Сильная</option>
        <option value="5">Очень сильная</option>
      </select>
      
      <p className= 'filter__option'>Горчинка:</p>
      <select value={bitterness} onChange={(e) => setBitterness(e.target.value)}>
        <option value="">Любая</option>
        <option value="1">Слабая</option>
        <option value="2">Средняя</option>
        <option value="3">Сильная</option>
      </select>

      <p className= 'filter__option'>Кислинка:</p>
      <select value={sourness} onChange={(e) => setSourness(e.target.value)}>
        <option value="">Любая</option>
        <option value="1">Очень слабая</option>
        <option value="2">Слабая</option>
        <option value="3">Средняя</option>
        <option value="4">Сильная</option>
      </select>

      <p className= 'filter__option'>Страна происхождения:</p>
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

      <p className= 'filter__option'>Вид кофейного дерева:</p>
      <select value={coffeeType} onChange={(e) => setCoffeeType(e.target.value)}>
        <option value="">Любой</option>
        <option value="Арабика">Арабика</option>
        <option value="Робуста">Робуста</option>
        <option value="Робуста + Арабика">Арабика + Робуста</option>
      </select>

      <div className='filter__discount'>
        <label className='filter__discount-text'>Скидка</label>
        <input className='filter__discount-checkbox' type="checkbox" checked={discount} onChange={(e) => setDiscount(e.target.checked)} />
      </div>

      <Button className='filter__btn' onClick={handleFilterChange}>Применить фильтр</Button>
    </div>
  );
};

export default Filter;
