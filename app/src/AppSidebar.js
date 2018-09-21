import React from 'react';
import $ from 'jquery';
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Grid, Headphones, Search, Tv, X } from 'react-feather'
import './AppSidebar.css';

class AppSidebar extends React.Component {

  constructor(props) {
      super(props);
      this.onClickNavItem = this.onClickNavItem.bind(this);
      this.onClickClose = this.onClickClose.bind(this);
      this.state = {
        colWidth: '1',
        isOpen: false,
        openApp: '',
      };
  }

  openSidebar() {
    let newState = Object.assign(this.state);
    newState.colWidth = '3';
    newState.isOpen = true;
    this.setState(newState);
  }

  closeSidebar() {
    let newState = Object.assign(this.state);
    newState.colWidth = '1';
    newState.isOpen = false;
    newState.openApp = '';
    this.setState(newState);
  }

  onClickNavItem() {
    this.openSidebar()
  }

  onClickClose() {
    this.closeSidebar()
  }

  render() {
    return (
      <Col id='sidebar-col' xs={this.state.colWidth}>
      {this.state.isOpen &&
          <a className='sidebar-close' href='#' onClick={this.onClickClose}><X /></a>
      }
      <Nav vertical id='sidebar'>
        <div className='sidebar-header'>
          <h3>zuuby</h3>
        </div>
        <NavItem className='active'>
          <NavLink href="#" onClick={this.onClickNavItem}><Search /></NavLink>
        </NavItem>
        <NavItem className='active'>
          <NavLink href="#" onClick={this.onClickNavItem}><Grid /></NavLink>
        </NavItem>
        <NavItem className='active'>
          <NavLink href="#" onClick={this.onClickNavItem}><Headphones /></NavLink>
        </NavItem>
        <NavItem className='active'>
          <NavLink href="#" onClick={this.onClickNavItem}><Tv /></NavLink>
        </NavItem>
      </Nav>
      </Col>
    );
  }
}

export default AppSidebar;
