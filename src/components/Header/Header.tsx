import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header: React.FC = () => (
  <div>
    <Link to="/"> Home </Link>
    <Link to="/about"> About </Link>
    <Link to="/topics"> Topics </Link>
  </div>
);

export default Header;
