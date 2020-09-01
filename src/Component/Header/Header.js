import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className="header-title">Prodemy Online course</h1>
            <nav>
                <a href="./html">Html</a>
                <a href="./css">CSS</a>
                <a href="./javascript">JavaScript</a>
                <a href="./bootstrap">Bootstrap</a>
            </nav>

            
        </div>
    );
};

export default Header;