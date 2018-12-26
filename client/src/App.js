import React, { Component } from 'react'
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Provider } from 'react-redux'
import './App.css'
import './fade.css' 
import store from './store'

import Navmenu from './components/Nav/navmenu'
import Home from './components/Home/home'
import Login from './components/Login/login'

class App extends Component {
    static propTypes ={
        location: PropTypes.object.isRequired,
    }
    render () {
        const { location } = this.props;
        console.log(location);
        const appearTransition = this.state; 
        return (
            <Provider store={ store }>
                <div className="App">
                    <header className="App-header">
                        <Navmenu/>
                    </header>
                        <BrowserRouter>
                                <Switch location={location}>
                                    console.log(loc)
                                    <Route exact path="/" component={Home} />
                                    <Route path="/login" component={Login} />
                                </Switch>
                        </BrowserRouter>   
                </div>
            </Provider>
        )
    }
}


export default App
