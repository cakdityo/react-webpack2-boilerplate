import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
    <div>
        <h2>About Page</h2>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
    </div>
);

export default About;