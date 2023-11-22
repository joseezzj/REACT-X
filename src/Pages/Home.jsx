// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Home.css'

const products = [
    {
      id: 1,
      title: 'MACONDO SUPREMO',
      image: '/IMG/MACONDO2.png',
      description: 'Descripcion 1',
    },
    {
      id: 2,
      title: 'MACONDO CATIGUA',
      image: '/IMG/macondo.png',
      description: 'Descripcion 2',
    },
    
  ];
  
  const Home = () => {
    return (
      <div className="home">
        <h2>Bienvenidos a Hache!</h2>
        <div className="product-list">
          {products.map((product) => (
            <Link to={`/catalog/${product.id}`} key={product.id} className="product-link">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
  