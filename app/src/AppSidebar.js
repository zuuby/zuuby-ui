import React from 'react';
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Grid, Headphones, Search, Tv, X } from 'react-feather'
import { LinkNavItem } from './MiscComponents';
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

  openSidebar(app='') {
    let newState = Object.assign(this.state);
    newState.colWidth = '3';
    newState.isOpen = true;
    newState.openApp = app;
    this.setState(newState);
  }

  closeSidebar() {
    let newState = Object.assign(this.state);
    newState.colWidth = '1';
    newState.isOpen = false;
    newState.openApp = '';
    this.setState(newState);
  }

  onClickNavItem(item) {
    this.openSidebar(item);
  }

  onClickClose() {
    this.closeSidebar();
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
            {this.state.isOpen &&
              <div><input placeholder="NBA Finals 2016"></input><Search /></div>
            }
          </div>
          {!this.state.isOpen &&
            [<LinkNavItem icon={<Search />} onClick={() => this.onClickNavItem('search')} key='search' />,
            <LinkNavItem icon={<Grid />} onClick={() => this.onClickNavItem('grid')} key='grid' />,
            <LinkNavItem icon={<Headphones />} onClick={() => this.onClickNavItem('headphones')} key='headphones' />,
            <LinkNavItem icon={<Tv />} onClick={() => this.onClickNavItem('tv')} key='tv' />,]
          }
          {this.state.isOpen &&
            <p>No results.</p>
          }
        </Nav>
      </Col>
    );
  }
}

export default AppSidebar;
