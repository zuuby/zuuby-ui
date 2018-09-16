import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown, } from 'reactstrap';
import Settings from 'react-feather/dist/icons/settings';
import Github from 'react-feather/dist/icons/github';

export let GithubNavItem = (props) => {
  return (
    <NavItem>
      <NavLink href={"https://github.com/" + props.owner + "/" + props.repo}>{props.text}<Github /></NavLink>
    </NavItem>
  );
};

export let SettingsDropdownNavItem = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <Settings />
      </DropdownToggle>
      <DropdownMenu>
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
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export let Logo = (props) => {
  return (
    <img src={props.logo} className={props.logoClassName} alt="logo" />
  );
};
