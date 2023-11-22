import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { itemId } = useParams();

  return <div>Product Detail - ID: {itemId}</div>;
};

export default ProductDetail;