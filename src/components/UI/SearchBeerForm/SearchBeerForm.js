import React, { useState } from 'react';

import APIClient from "../../../services/APIClient";
import "./SearchBeerForm.css";

const SearchBeerForm = () => {
    const [ beerTitle, setBeerName ] = useState("");
    const client = new APIClient();

    const searchInputChange = (event) => {
        setBeerName(event.target.value);
    }

    const getBeerByName = (event) => {
        event.preventDefault();

        client.fetchBeerByName(beerTitle).then((result) => {
            console.log(result.data);
        });
    }

    return (
        <form action="" method="get" className="formSearchCharacter">
            <input type="text" onChange={searchInputChange} name="name" id="name" required placeholder="Search by name..." />
            <button type="submit"  id="searchButton" className="searchButton" onClick={getBeerByName}>
                <div id="circle"></div>
                <a href="#">Search</a>
            </button>

        </form>
    );
};

export default SearchBeerForm;
