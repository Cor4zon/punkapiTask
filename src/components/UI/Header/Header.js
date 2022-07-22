import React from 'react';

import SearchBeerForm from "../SearchBeerForm/SearchBeerForm";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__logo">BeerLand</h1>

            <SearchBeerForm />
        </header>
    );
};

export default Header;
