import React from 'react'
import { HeroList } from '../Hero/HeroList'

export const MarvelScreen = () => {
    return (
        <>
            <h1 className='display-1'>Marvel SuperHeroes</h1>
            <hr/>
            <HeroList publisher='Marvel Comics'/>
        </>
    )
}
