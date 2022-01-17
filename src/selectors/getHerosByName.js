
import { heroes } from '../data/heroes';

export const getHerosByName = (name = '') => {
    console.log("rendering heroes by name");
    if(name === '') return [];
    const regex = new RegExp(name, 'i');
    return heroes.filter(hero => hero.superhero.match(regex));
}
