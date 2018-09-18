import React from 'react';
import { DropdownItem, Nav } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { GithubNavItem, SettingsDropdownNavItem, UserNavItem } from './MiscComponents';
import logo from './resources/images/zuuby_logo_no_letters_xs.png';
import './AppHeader.css';

class AppHeader extends React.Component {
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
      <header className='AppHeader'>
        <AppNavbar logo={logo} logoClassName='AppHeader-logo' color='dark'>
          <Nav className="ml-auto" navbar>
            <GithubNavItem owner="zuuby" repo="zuuby-ui" />
            <SettingsDropdownNavItem>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </SettingsDropdownNavItem>
            <UserNavItem />
          </Nav>
        </AppNavbar>
      </header>
    );
  }
}

export default AppHeader;
