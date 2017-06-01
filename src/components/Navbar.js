import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/about">About</Link>
    </div>
);

export default Navbar;