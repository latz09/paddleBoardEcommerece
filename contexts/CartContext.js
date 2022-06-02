import { createContext, useState } from 'react';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const refreshCartItems = async () => {
		try {
			const res = await fetch('/api/cart');
			const latestCartItems = await res.json();
			setCartItems(latestCartItems);
		} catch (error) {
			console.log(error);
		}
	};

	const addItemToCart = async (item) => {
		try {
			const res = await fetch('/api/cart', {
				method: 'POST',
				body: JSON.stringify({ item }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const newItem = await res.json();

			setCartItems((prevItems) => {
				return [newItem, ...prevItems];
			});
		} catch (error) {
			console.log(error);
		}
	};
    
	const removeItemFromCart = async (itemId) => {
		try {
			const res = await fetch('/api/cart', {
				method: 'DELETE',
				body: JSON.stringify({ itemId }),
				headers: {
					'Content-Type': 'application/json',
				},
			});		
            
			setCartItems((prevItems) => {
				return prevItems.filter((item) => item.id !== itemId);
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<CartContext.Provider
			//all the properties we will have access to when we pull in useContext(CartContext)
			value={{
				refreshCartItems,
				cartItems,
				setCartItems,
				addItemToCart,
				removeItemFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider, CartContext };