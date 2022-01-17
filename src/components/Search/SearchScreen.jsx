import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../Hero/HeroCard';
import queryString from 'query-string';
import { useMemo } from 'react';


import 'animate.css';

export const SearchScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {q = ''} = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({
        searchText: q
    });

    
    const { searchText } = values;
    const heroes = useMemo(() => getHerosByName(q), [q]);
    
    const handleSearch = (e)=>{
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1 className='display-1'>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5 animate__animated animate__fadeInLeft">
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Batman" 
                            autoComplete='off'
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-7 text-center animate__animated animate__fadeInRight">
                    <h4>Search Result</h4>
                    <hr/>
                    <ul className="list-group">

                        {
                            q==='' 
                                &&
                            <div className="alert alert-info ">Search a hero</div>
                        }
                        {
                            q!=='' && heroes.length===0 &&
                            <div className="alert alert-danger animate__animated animate__fadeIn">No results</div>
                        }

                        {
                            heroes.map(hero => (
                                <HeroCard key={hero.id} {...hero} /> 
                            ))
                        }
                    </ul>
                </div>
            </div>  
        </>
    )
}
