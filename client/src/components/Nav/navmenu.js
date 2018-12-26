import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux';
import { Nav, NavItem } from 'react-bootstrap';
import './navmenu.css';

class Navmenu extends React.Component {
    render () {
        function handleSelect(selectedKey) {
            console.log(`selected ${selectedKey}`);
        }

        return (
            <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
            <NavItem eventKey={1} href="/">
                Home
            </NavItem>
            <NavItem eventKey={2} href='/login'>
                Login
            </NavItem>
            <NavItem eventKey={3} disabled>
                NaNaNa
            </NavItem>
          </Nav>
        );
    }
}

export default Navmenu;