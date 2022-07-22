import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./BeerCard.css";

const ImageBeer= styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
`;

const BeerCard = ({ beer }) => {
    const [ description, setDescription ] = useState("");
    const [ isFull, setIsFull ] = useState(false);

    useEffect(() => {
        setDescription(getDescription(beer.description));
    }, [])

    const getDescription = (description) => {
        beer.description?.slice(0, 140)
        if (description.length > 140) {
            return description.slice(0, 140);
        }
        return description;
    }

    const toggleDescriptionSize = () => {
        console.log("desc")
        if (isFull) {
            setDescription(beer.description.slice(0, 140));
        } else {
            setDescription(beer.description);
        }
        setIsFull(!isFull)
    }

    const toggleDescriptionButton = (
        beer.description.length < 140 ?
            null :
            <span onClick={toggleDescriptionSize}>
                {
                    isFull ? <span style={{color: "blue"}}> [Show less]</span> : "..."
                }
            </span>
    )

    return (
        <div className="beer-card__container">
            <Link
                to={`${beer.id}`}
                style={{
                    textDecoration: "none",
                }}
            >
                <div className="image__container">
                    <ImageBeer src={beer.image_url} alt={beer.name}/>
                </div>
            </Link>

            <h2 className="beer__name"> { beer.name }</h2>
            <p className="beer__description">
                { description }
                { toggleDescriptionButton }
            </p>
        </div>
    );
};

export default BeerCard;
