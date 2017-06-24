import React from 'react';
import Logo from './commons/MarvelLogo';
import { Link } from 'react-router-dom';

import './BaseHeroesScreen.css';

const BaseHeroesScreen = ({header, heroesGrid, footer}) => (
    <div className="BaseHeroesScreen-container">
        <Link to='/'>
            <Logo className='BaseHeroesScreen-logo' />
        </Link>

        <h2> {header} </h2>
        					
        { heroesGrid }
        
        { footer }				
    </div>
);

export default BaseHeroesScreen;