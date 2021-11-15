import {NavLink, Link} from 'react-router-dom'
import maybelline from '../pictures/maybelline.webp'

const Header = () => {
    return (
      <header>
        <Link to="/">
          <img src={maybelline} alt="logo" width="30%" />
        </Link>
        <ul>
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/product">
            <li>Products</li>
          </NavLink>
          <NavLink to="/cart">
            <li> YOUR CART</li>
          </NavLink>
        </ul>
      </header>
    );
}

export default Header
