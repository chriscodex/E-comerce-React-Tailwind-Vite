import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import { useContext } from 'react';

function Navbar() {
  const { count, toggleCheckoutSideMenu, setSearchByCategory } =
    useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="w-full flex bg-white justify-between items-center fixed z-10 py-5 px-8 text-sm font-light top-0">
      {/* Lista derecha */}
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory()}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('Furniture')}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('Electronics')}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('Shoes')}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('Others')}
          >
            Others
          </NavLink>
        </li>
      </ul>
      {/* Lista izquida */}
      <ul className="flex items-center gap-3">
        <li className="text-black/60">chriscodex@domain.com</li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li
          onClick={() => toggleCheckoutSideMenu()}
          className="flex items-center justify-between"
        >
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          <span className="ml-1">{count}</span>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
