import React, { useState } from 'react';
import './App.css';
import './index.css';

const ProductFilter = () => {
  const [products] = useState([
    ["Смартфон", 24999, "Электроника"],
    ["Ноутбук", 79999, "Электроника"],
    ["Наушники", 2999, "Аудиотехника"],
    ["Кофемашина", 15999, "Бытовая техника"],
    ["Телевизор", 44999, "Электроника"],
    ["Микроволновка", 7999, "Бытовая техника"],
    ["Холодильник", 32999, "Бытовая техника"],
    ["Чайник", 1999, "Бытовая техника"],
    ["Игровая консоль", 35999, "Электроника"],
    ["Смарт-часы", 12999, "Электроника"]
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [category, setCategory] = useState('');

  const handleSort = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      return order === 'asc' ? a[1] - b[1] : b[1] - a[1];
    });
    setFilteredProducts(sorted);
    setSortOrder(order);
  };

  const handleFilterByPrice = (min, max) => {
    const filtered = products.filter(product => product[1] >= min && product[1] <= max);
    setFilteredProducts(filtered);
    setPriceRange({ min, max });
  };

  const handleFilterByCategory = (selectedCategory) => {
    const filtered = products.filter(product => product[2] === selectedCategory || selectedCategory === '');
    setFilteredProducts(filtered);
    setCategory(selectedCategory);
  };

  return (
    <div className="product-filter">
      <h1>Product Filter</h1>

      <div className="sort-buttons">
        <button onClick={() => handleSort('asc')}>Sort by Price: Ascending</button>
        <button onClick={() => handleSort('desc')}>Sort by Price: Descending</button>
      </div>

      <div className="price-filter">
        <h3>Filter by Price Range</h3>
        <input
          type="number"
          placeholder="Min Price"
          onChange={(e) => setPriceRange({ ...priceRange, min: +e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => setPriceRange({ ...priceRange, max: +e.target.value })}
        />
        <button onClick={() => handleFilterByPrice(priceRange.min, priceRange.max)}>Apply</button>
      </div>

      <div className="category-filter">
        <h3>Filter by Category</h3>
        <select onChange={(e) => handleFilterByCategory(e.target.value)} value={category}>
          <option value="">All Categories</option>
          <option value="Электроника">Электроника</option>
          <option value="Аудиотехника">Аудиотехника</option>
          <option value="Бытовая техника">Бытовая техника</option>
        </select>
      </div>

      <div className="filtered-products">
        <h2>Filtered Products</h2>
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              {product[0]} - {product[1]} руб. ({product[2]})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
