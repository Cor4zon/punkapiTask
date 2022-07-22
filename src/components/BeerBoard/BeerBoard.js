import React, { useState, useEffect } from 'react';
import BeerCard from "../BeerCard/BeerCard";
import APIClient from "../../services/APIClient";

const BeerBoard = () => {
    const [beers, setBeers] = useState([]);
    const client = new APIClient();

    useEffect(() => {
        client.fetchBeers().then((result) => {
            setBeers([...result.data]);
        })
    }, []);

    const beerBoard = beers.map(beer => {
            return <BeerCard beer={beer} />
    });

    return (
        <div>
            { beerBoard }
        </div>
    );
};

export default BeerBoard;
