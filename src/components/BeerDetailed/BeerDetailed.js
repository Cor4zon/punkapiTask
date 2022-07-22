import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

import APIClient from "../../services/APIClient";
import "./BeerDetailed.css";

const BigImageBeer= styled.img`
  width: auto;
  height: 400px;
  object-fit: cover;
`;

const BeerDetailed = () => {
    const [ beer, setBeer ] = useState({});
    const client = new APIClient();
    const { id } = useParams();


    useEffect(() => {
        client.fetchBeerById(id).then((result) => {
            setBeer({...result.data[0]});
        })
    }, [])

    const foodPairing = beer.food_pairing?.map(food => {
        return <li>{food}</li>
    })

    return (
        <div className="beer-detailed__container">
            <div className="image__container">
                <BigImageBeer src={beer.image_url} alt={beer.name}/>
            </div>

            <div className="beer-info">
                <p className="beer-detailed__name"> <span className="bold"> Название: </span> { beer.name } </p>
                <p className="beer-detailed__tagline"> <span className="bold"> tagline:</span> { beer.tagline } </p>
                <p className="beer-detailed__description"> <span className="bold"> Описание: </span> { beer.description } </p>
                <p className="beer-detailed__abv"> <span className="bold"> abv: </span> { beer.abv } </p>
                <p className="beer-detailed__foodPairing"> <span className="bold">Сочетается с:</span>
                    <ul className="food-pairing">{ foodPairing }</ul>
                </p>
            </div>

        </div>
    );
};

export default BeerDetailed;
