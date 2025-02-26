// component header
import React from 'react';
import logo from '../assets/logo.jpg';
import recipeBox from '../assets/recipe-box.jpg';
import avatar from '../assets/avatar.jpg';

const Header = () => {
    return (
        // img logo width 100%
        
        <header>
            <img style={{ width: '10%', paddingRight: '20px' }} src={logo} alt="logo" />
            <div className="textbox">
                <input value="cakescascsa" className="textbox" type="text" />
                <i className="search-icon"></i> 
            </div>            
            <nav>
                <ul>
                    <li>
                        <a href="/tinh-toan">Tính toán</a>
                    </li>
                    <li>
                        <a href="/">Recipes</a>
                    </li>
                    <li>
                        <a href="/">Ingredients</a>
                    </li>
                    <li>
                        <a href="/">Occassions</a>
                    </li>
                    <li>
                        <a href="/">About us</a>
                    </li>
                </ul>
            </nav>
            <img style={{ width: '10%', paddingLeft: '20px' }} src={recipeBox} alt="recipe-box
            " />
            <img style={{ width: '3%', paddingLeft: '20px' }} src={avatar} alt="avatar" />
        </header>
    );
}

export default Header;