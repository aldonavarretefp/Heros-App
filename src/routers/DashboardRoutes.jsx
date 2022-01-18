import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Navbar } from '../components/UI/Navbar';
import { DCScreen } from '../components/DC/DCScreen';
import { MarvelScreen } from '../components/MARVEL/MarvelScreen';
import { SearchScreen } from '../components/Search/SearchScreen';
import { HeroScreen } from '../components/Hero/HeroScreen';

import 'animate.css';
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container animate__animated animate__fadeIn">
                <Routes>
                        <Route path="dc" element={<DCScreen />} />
                        <Route path="marvel" element={<MarvelScreen />} />
                        <Route path="search" element={<SearchScreen />} />
                        <Route path='hero/:heroeId' element={<HeroScreen/>} />
                        <Route path="" element={<MarvelScreen />} />

                </Routes>
            </div>
        </>
    )
}
