import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const products = [
  { id: 1, name: "Ürün 1", price: 50.00 },
  { id: 2, name: "Ürün 2", price: 30.00 },
  { id: 3, name: "Ürün 3", price: 20.00 }
];

const ProductList: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-1/2">
      <h2 className="text-xl mb-4">Ürün Listesi</h2>
      {products.map(product => (
        <div key={product.id} className="border p-2 mb-2">
          <h3 className="text-lg">{product.name}</h3>
          <p>Fiyat: {product.price} TL</p>
          <button
            className="bg-blue-500 text-white p-1 mt-2"
            onClick={() => dispatch(addToCart(product))}
          >
            Sepete Ekle
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
