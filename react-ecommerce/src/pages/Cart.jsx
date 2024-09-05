import React from 'react';
import { useShop } from '../context/GlobalContext';
import Title from '../components/Title';

const Cart = () => {
  const { cart, setCart, currency } = useShop();

  const handleRemoveItem = (key) => {
    const updatedCart = { ...cart };
    delete updatedCart[key];
    setCart(updatedCart);
  };

  const handleQuantityChange = (key, amount) => {
    const updatedCart = { ...cart };
    if (updatedCart[key]) {
      updatedCart[key].quantity += amount;
      if (updatedCart[key].quantity <= 0) {
        delete updatedCart[key];
      }
      setCart(updatedCart);
    }
  };

  const cartItems = Object.values(cart);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const currencySymbol = currency === 'USD' ? '$' : '€'; // Adjust this as needed

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => {
            const key = `${item._id}-${item.size}`;
            return (
              <div className="flex py-4 border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-3" key={item._id}>
                    <div className='flex items-start gap-6'>
                      <img src={item.image[0]} alt="" className="w-16 sm:w-20" />
                     <div>
                      <p>{item}</p>
                     </div>

                    </div>
                    
              </div>
            
                 
            );
          })
        )}
      </div>
     
    </div>
  );
};

export default Cart;
