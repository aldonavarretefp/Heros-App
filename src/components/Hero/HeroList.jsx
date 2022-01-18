
import { useMemo} from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

import 'animate.css';
export const HeroList = ({ publisher = 'Marvel Comics' }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='card-group row row-cols-2 g-3 row-cols-md-3'>
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
