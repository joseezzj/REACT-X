// Catalog.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Catalog/Catalog.css'

const Catalog = () => {
  return (
    <div className="catalog">
      <h2>Catalog</h2>
      <Link to="/catalog/1" className="product-link">Product 1</Link>
      <Link to="/catalog/2" className="product-link">Product 2</Link>
    </div>
  );
};

export default Catalog;
