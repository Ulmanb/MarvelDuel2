import React from 'react';
import ReactList from 'react-list';
import HeroThumb from './HeroThumb';

import './HeroesGrid.css';

const HeroGrid = ({heroes, onHeroClick = () => false, isHeroSelected = () => false}) => { 
    const renderItem = (index, key) => (
        <HeroThumb 
            key={key} 
            hero={heroes[index]} 
            onClick={(...params) => onHeroClick(...params, index)} 
            isSelected={isHeroSelected(heroes[index])}
        />
    );

    return (
        <div className='HeroesGrid-container'>
            <ReactList 
                className='HeroesGrid-list'
                type='simple'
                length={heroes.length}
                itemRenderer={renderItem}
            />
        </div>
    );
};

export default HeroGrid;