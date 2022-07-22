import React from 'react';
import styled from "styled-components";

import "./BeerCard.css";

const ImageBeer= styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
`;

const BeerCard = ({ beer }) => {
    return (
        <div className="beer-card__container">
            <div className="image__container">
                <ImageBeer src={beer.image_url} alt={beer.name}/>
            </div>
            <h1> { beer.name }</h1>
            <p> { beer.description }</p>
        </div>
    );
};

export default BeerCard;
