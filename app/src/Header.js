import React from 'react';
import { Nav } from 'reactstrap';
import AppNavbar from './AppNavbar';
import GithubNavItem from './GithubNavItem';
import SettingsNavItem from './SettingsNavItem';
import logo from './resources/images/zuuby_logo_no_letters_xs.png';
import './Header.css';

class Header extends React.Component {
  /*
  handleSearch(searchTerm) {
    $.get('localhost:3000/api/search', {search: searchTerm})
      .done((data) => {
        // store resulting data for later rendering
        localStorage.setItem('searchResults', data);
      })
      .fail(() => {
        // render an error message
      })
      .always(() => {
        //route to results page
        window.location.pathname = 'results';
        // Should probably just re-render the content with the results?
      });
  }*/

  render() {
    return (
      <AppNavbar logo={logo} logoClassName='Header-logo'>
        <Nav className="ml-auto" navbar>
          <GithubNavItem owner="zuuby" repo="zuuby-ui" />
          <SettingsNavItem />
        </Nav>
      </AppNavbar>
    );
  }
}

export default Header;
