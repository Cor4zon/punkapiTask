import React from 'react';
import styled from "styled-components";

const ImageBeer= styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
`;

const BeerCard = ({ beer }) => {
    return (
        <div className="beer-card__container">
            <ImageBeer src={beer.image_url} alt={beer.name}/>
            <h1> { beer.name }</h1>
            <p> { beer.description }</p>
        </div>
    );
};

export default BeerCard;
