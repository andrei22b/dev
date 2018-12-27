import React, { Component } from 'react'
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Provider } from 'react-redux'
import './App.css'
import store from './store'

import Navmenu from './components/Nav/navmenu'
import Home from './components/Home/home'
import Login from './components/Login/login'

class App extends Component {

    render () {
        return (
            <Provider store={ store }>
                <div className="App">
                    <header className="App-header">
                        <Navmenu/>
                    </header>
                        <BrowserRouter>
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/nana" component={Login} />
                                </Switch>
                        </BrowserRouter>
                </div>
            </Provider>
        )
    }
}


export default App
