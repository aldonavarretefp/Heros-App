import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';


import 'animate.css';
export const HeroScreen = () => {


    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
    

    const navigate = useNavigate();

    const imgPath = `/assets/${heroeId}.jpg`;
    
    if(!hero){
        return <Navigate to="/marvel" />
    } 

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
        id

    } = hero;
    const handleReturn = () => navigate(-1);

    return (
        <div className="row mt-5">
            <div className="col text-center animate__animated animate__slideInLeft ">
                <img
                    src={imgPath}
                    alt={id}
                    className="img-thumbnail"
                />
            </div>
            <div className="col mt-5 text-center animate__animated animate__slideInRight">
                <h1 className='display-5'>{superhero}</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Appereance:</b> {first_appearance}</li>
                </ul>
                <h3 className='mt-5'>Characters:</h3>
                <p className='text-muted lead'>{characters}</p>
                <button className="btn btn-outline-primary w-50" onClick={handleReturn}>Back</button>

            </div>
        </div>
    )
}
