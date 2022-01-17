import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../Hero/HeroCard';
import queryString from 'query-string';
import { useMemo } from 'react';


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
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            autoComplete='off'
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-7 text-center">
                    <h4>Search Result</h4>
                    <hr/>
                    <ul className="list-group">

                        {
                            q==='' 
                                &&
                            <div className="alert alert-info">Search a hero</div>
                        }
                        {
                            q!=='' && heroes.length===0 &&
                            <div className="alert alert-danger">No results</div>
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
