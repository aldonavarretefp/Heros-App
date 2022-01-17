import React from 'react'
import { Link } from 'react-router-dom';

import './styles.css'
export const HeroCard = ({id,superhero,publisher,alter_ego,characters,first_appearance}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="col">
            <div className="card bg-dark text-white imgCard">
                <img src={imagePath} className={"card-img imgHero"} alt={superhero}/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    <p className="card-text">{publisher}</p>
                    <p className="card-text">{first_appearance}</p>
                    {
                        alter_ego !== characters &&
                        <p className="card-text text-muted">{characters}</p>
                    }

                    <Link to={`/hero/${id}`} className="btn btn-outline-light ">
                        More Info
                    </Link>

                </div>
            </div>
        </div>
    )
}
