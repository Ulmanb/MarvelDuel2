import React from 'react';

import './HeroThumb.css';

const HeroThumb = ({ hero, isSelected, onClick }) => (
    <div className='HeroThumb-container'>
        <img
            src={hero.thumbnail.url} 
            className={isSelected ? 'HeroThumb-img-selected' : 'HeroThumb-img'} 
            onClick={() => onClick(hero, isSelected)}
            alt={hero.name}
        />

        <h5> {hero.name} </h5>
    </div>
);

export default HeroThumb;