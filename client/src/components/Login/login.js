import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux';
import { Modal, Button, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './login.css';

class Login extends React.Component {
    state = {
      name: 'Andrei',
      age: 27
    }
    render () {
      return (
        <div className='App-login'>
          <h1>Nume = {this.state.name}</h1>
          <h1>Varsta = {this.state.age}</h1>
        </div>
      )
    }
  }
  
export default Login;