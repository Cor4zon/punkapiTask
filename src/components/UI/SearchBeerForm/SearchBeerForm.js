import React, { useState } from 'react';

import APIClient from "../../../services/APIClient";

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
        <div>
            <form action="" method="get" className="formSearchCharacter">
                <input type="text" onChange={searchInputChange} name="name" id="name" required placeholder="Search by name..." />
                <button type="submit" className="searchBtn" onClick={getBeerByName}>Search</button>
            </form>
        </div>
    );
};

export default SearchBeerForm;
