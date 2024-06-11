import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, } from '../store/index';
import { removeFromCart } from '../store/cartSlice';
const ShoppingCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-1/2">
      <h2 className="text-xl mb-4">Alışveriş Sepeti</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="border p-2 mb-2">
            {item.name} - {item.quantity} adet - {item.price * item.quantity} TL
            <button
              className="bg-red-500 text-white p-1 ml-2"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Kaldır
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4">Toplam: {totalPrice.toFixed(2)} TL</p>
    </div>
  );
};

export default ShoppingCart;
