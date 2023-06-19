import { createContext, useEffect, useState } from 'react';
import { apiUrl } from '../utils/api';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Shopping Cart - Cart products
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart · Order
  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/products`);
      const products = await response.json();
      setItems(products);
    } catch (error) {
      console.error(`Ocurrió un error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({ images: [] });

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  }
  const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        toggleCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
