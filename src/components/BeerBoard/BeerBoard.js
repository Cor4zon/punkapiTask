import React, { useState, useEffect } from 'react';

import BeerCard from "../BeerCard/BeerCard";
import APIClient from "../../services/APIClient";
import "./BeerBoard.css";

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
        <div className="beer-board__container">
            { beerBoard }
        </div>
    );
};

export default BeerBoard;
