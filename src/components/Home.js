import React, { Component } from 'react';
import Logo from './commons/MarvelLogo';
import { Link } from 'react-router-dom';
import Button from './commons/Button';

import './Home.css';

class Home extends Component {
    state = { 
        duelId: ''
    };

    onViewClick(e) {
        // Duel id must be a number 
        if ((this.state.duelId.length === 0) ||
            (isNaN(this.state.duelId))) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="Home-container"> 
                <Logo />
                <Link to='create/'>
                    <Button> Create Duel </Button>
                </Link>

                <div className="Home-duel-view-container"> 
                    <input 
                        type="text" 
                        placeholder="Duel ID" 
                        onChange={(e) => this.setState({duelId: e.target.value})}
                    />
                    <Link to={`view/${this.state.duelId}`} onClick={this.onViewClick.bind(this)}> 
                        <Button> View Duel </Button> 
                    </Link>
                </div>
            </div>            
        );
    }
}

export default Home;