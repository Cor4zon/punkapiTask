import React from 'react';
import { Link } from 'react-router-dom';

import SearchBeerForm from "../SearchBeerForm/SearchBeerForm";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <Link  to={``} className="link">
                <h1 className="header__logo">BeerLand</h1>
            </Link>
            <div className="search-form__container">
                <SearchBeerForm />
            </div>
        </header>
    );
};

export default Header;
