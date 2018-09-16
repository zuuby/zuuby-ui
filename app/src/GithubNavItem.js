import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import Github from 'react-feather/dist/icons/github';

let GithubNavItem = (props) => {
  return (
    <NavItem>
      <NavLink href={"https://github.com/" + props.owner + "/" + props.repo}>{props.text}<Github /></NavLink>
    </NavItem>
  );
};

export default GithubNavItem;
