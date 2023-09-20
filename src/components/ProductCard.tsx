import React from "react";

// import { Container } from './styles';

const ProductCard: React.FC<any> = ({ product }) => {
  return <div>{product.nome}</div>;
};

export default ProductCard;
