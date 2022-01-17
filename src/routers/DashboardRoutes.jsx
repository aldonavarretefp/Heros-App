import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Navbar } from '../components/UI/Navbar';
import { DCScreen } from '../components/DC/DCScreen';
import { MarvelScreen } from '../components/MARVEL/MarvelScreen';
import { SearchScreen } from '../components/Search/SearchScreen';
import { HeroScreen } from '../components/Hero/HeroScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                        <Route path="dc" element={<DCScreen />} />
                        <Route path="marvel" element={<MarvelScreen />} />
                        <Route path="search" element={<SearchScreen />} />
                        <Route path='hero/:heroeId' element={<HeroScreen/>} />
                </Routes>
            </div>
        </>
    )
}
