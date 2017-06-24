import React, { Component } from 'react';
import HeroesGrid from './HeroesGrid';
import Button from './commons/Button';
import { Link } from 'react-router-dom';
import { heroesToDuelId } from '../store/DuelsStore';
import BaseHeroScreen from './BaseHeroesScreen';

import './CreateDuel.css';

const REQUIRED_HEROES = 10;

class CreateDuel extends Component {
    state = { 
		selectedHeroes: []
	};

	onHeroClick(currHero, index) {		
		let selectedHeroes = [];

		if (!this.isHeroSelected(currHero)) {
			selectedHeroes = [...this.state.selectedHeroes, currHero];
		} else {
			selectedHeroes = this.state.selectedHeroes.filter((hero) => hero.name !== currHero.name);
		}

		this.setState({
			selectedHeroes
		});
	}

	getSelectedHeroesText() {
		switch (this.state.selectedHeroes.length) {
			case 0:
				return 'No heroes selected'
			case REQUIRED_HEROES:
				return `${REQUIRED_HEROES} heroes selected`
			default:
				return `${this.state.selectedHeroes.length}/${REQUIRED_HEROES} heroes selected`;
		}
	}

	isHeroSelected(hero) {
		return !(-1 === this.state.selectedHeroes.findIndex((otherHero) => otherHero.name === hero.name));
	}
	
    render() {
        return (
			<BaseHeroScreen 
				header='SELECT 10 HEROES TO PARTICIPATE IN THE duel'
				heroesGrid={ 
					<div className='CreateDuel-grid-container'>	
						<HeroesGrid 
							heroes={this.props.heroes} 
							onHeroClick={(...params) => this.onHeroClick(...params)}
							isHeroSelected={this.isHeroSelected.bind(this)}
						/> 
					</div>
				}

				footer={
					<footer>
						<h2> { this.getSelectedHeroesText() } </h2> 
						{this.state.selectedHeroes.length === REQUIRED_HEROES ? ( 
							<Link to={`/view/${heroesToDuelId(this.props.heroes, this.state.selectedHeroes)}`}> 
								<Button> View Duel </Button> 
							</Link> 
						) : null}
					</footer>
				}
			/>
        );
    }
}

export default CreateDuel;
