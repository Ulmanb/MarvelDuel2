import React from 'react';
import HeroGrid from './HeroesGrid';
import { duelIdToSelectedHeroes } from '../store/DuelsStore';
import BaseHeroesScreen from './BaseHeroesScreen';

const ViewDuel = ({duelId, heroes}) => (
    <BaseHeroesScreen 
        header='Heroes selected for duel' 
        heroesGrid={
            <div style={{maxWidth: '860px', margin: '0 auto', paddingTop: '2vh'}}>
                {heroes.length > 0 ? <HeroGrid heroes={duelIdToSelectedHeroes(duelId, heroes)} /> : null}
            </div>
        }
        footer={<h2>{`Duel ID: ${duelId}`}</h2>}
    />
);

export default ViewDuel;