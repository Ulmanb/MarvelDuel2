import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/Home';
import CreateDuel from './components/CreateDuel';
import ViewDuel from './components/ViewDuel';
import { getHeroes } from './store/HeroStore';

import './App.css';

class App extends Component {

  state = { 
		heroes: [], 
	};
    
  async componentDidMount() {
    const heroes = await getHeroes();
    if (heroes !== this.state.heroes) {
      this.setState({
        heroes
      });
    }
  }

  render() {
    return (

      <Router>
        <div className='App-router-container'>
          <Route exact path="/" component={Home}/>
          <Route path="/create" component={() => <CreateDuel heroes={this.state.heroes} />} />
          <Route path="/view/:id" component={(router) => <ViewDuel duelId={router.match.params.id} 
                                                                   heroes={this.state.heroes}/>} />
        </div>
      </Router>

    );
  }
}

export default App;
