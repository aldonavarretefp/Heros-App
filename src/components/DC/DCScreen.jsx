import React from 'react'
import { HeroList } from '../Hero/HeroList'

export const DCScreen = () => {
    return (
        <>
            <h1 className='display-1 dc'>DC SuperHeroes</h1>
            <hr/>
            <HeroList publisher='DC Comics'/>
        </>
    )
}
