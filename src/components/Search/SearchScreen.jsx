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
            <h1 className='display-1 normal'>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5 animate__animated animate__fadeInLeft">
                    <form onSubmit={handleSearch}>
                        <div className="row">
                            <div className="col-12 mt-md-2 col-md-8 col-lg-8 col-xl-8">
                                <input 
                                    className="form-control me-1" 
                                    type="search" 
                                    placeholder="Batman" 
                                    autoComplete='off'
                                    name="searchText"
                                    value={searchText}
                                    onChange={handleInputChange}
                                    />

                            </div>
                            <div className="col mt-2 col-md-4 col-lg-4 col-xl-4 ">
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </div>
                        </div>
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
