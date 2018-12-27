import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux';
import { Nav, NavItem } from 'react-bootstrap';
import './navmenu.css';

class Navmenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        key: null,
    }
    handleSelect(selectedElement) {
        this.setState({key: selectedElement});
        console.log(selectedElement);
    }
    handleClick(e) {
        console.log(e.stopPropagation);
        e.stopPropagation();
    }
    
    render () {
        return (
            <Nav bsStyle="pills" activeKey={this.state.key} onSelect={this.handleSelect} onClick={this.handleClick}>
                <NavItem eventKey={1} href="/">Home</NavItem>
                <NavItem eventKey={2} href='/login'>Login</NavItem>
                <NavItem eventKey={3} href='/nana'>NaNaNa</NavItem>
            </Nav>
        );
    }
}

export default Navmenu;