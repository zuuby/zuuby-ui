import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import Settings from 'react-feather/dist/icons/settings';

let SettingsNavItem = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <Settings />
      </DropdownToggle>
      <DropdownMenu right>
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

export default SettingsNavItem;
