import React, { useState, useEffect } from 'react';

import BeerCard from "../BeerCard/BeerCard";
import APIClient from "../../services/APIClient";
import "./BeerBoard.css";

const BeerBoard = () => {
    const [beers, setBeers] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(localStorage.getItem("pageNumber"));
    const client = new APIClient();

    useEffect(() => {
        client.fetchBeers(currentPage).then((result) => {
            setBeers([...result.data]);
        })
    }, [currentPage]);

    const beerBoard = beers.map(beer => {
            return <BeerCard beer={beer} key={beer.id} />
    });

    const loadPrevPage = () => {
        const newPageNumber = currentPage - 1;
        if (newPageNumber < 1) {
            return;
        }
        setCurrentPage(`${newPageNumber}`);
        localStorage.setItem("pageNumber", currentPage);
    }

    const loadNextPage = () => {
        const newPageNumber = +currentPage + 1;
        if (newPageNumber > 32) {
            return;
        }
        setCurrentPage(`${newPageNumber}`);
        localStorage.setItem("pageNumber", currentPage);
    }

    return (
        <div className="beer-board__container">
            { beerBoard }

            <div className="pageInfo">
                <p>Page { currentPage } of 32</p>
                <p className="changePageBtn" onClick={loadPrevPage}>{"<< Prev"}</p>
                <p className="changePageBtn" onClick={loadNextPage}>{"Next >>"}</p>
            </div>
        </div>
    );
};

export default BeerBoard;
