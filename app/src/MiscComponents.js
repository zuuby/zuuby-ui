import React from 'react';
import { DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown, } from 'reactstrap';
import Settings from 'react-feather/dist/icons/settings';
import Github from 'react-feather/dist/icons/github';
import User from 'react-feather/dist/icons/user';

export let DropDownNavItem = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {props.icon}
      </DropdownToggle>
      <DropdownMenu>
        {props.children}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export let LinkNavItem = (props) => {
  return (
    <NavItem>
      <NavLink href={props.link || "#" }>{props.icon || props.text}</NavLink>
    </NavItem>
  );
};

export let SettingsDropdownNavItem = (props) => {
  return (
    <DropDownNavItem icon={<Settings />}>
      {props.children}
    </DropDownNavItem>
  );
};

export let GithubNavItem = (props) => {
  return <LinkNavItem icon={<Github />} link={"https://github.com/" + props.owner + "/" + props.repo} />
};

export let UserNavItem = (props) => {
  return <LinkNavItem icon={<User />} />
};

export let Logo = (props) => {
  return (
    <img src={props.logo} className={props.logoClassName} alt="logo" />
  );
};
