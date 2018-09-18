import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand } from 'reactstrap';

import { Logo } from './MiscComponents';

class AppNavbar extends React.Component {
  static defaultProps = {
    logo: null,
    logoClassName: '',

    /* Nav style */
    light: false,
    dark: true,
    color: 'dark',

    /* Nav behavior */
    collapse: true,
    expand: 'md',
  };

  constructor(props) {
    super(props);

    if (props.collapse) {
      AppNavbar.prototype.toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
  }

  render() {
    let finalnav;
    if (this.props.collapse) {
      /*
        Some React-isms: originally the below line was formatted as
        finalnav = (
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.children}
          </Collapse>
        ); // COMPILE ERRORS!

        However, JSX expect a *single* node to be evaluated (the
         above statement evaluates to two sister nodes.) Keeping
         everything else the same, but evaluating them as an array
         of two nodes seems to work just fine. Using an array or
         iterator requires a 'key' prop which must be unique.
      */
      finalnav = [
        <NavbarToggler onClick={this.toggle} key='AppNavBarToggler' />,
        <Collapse isOpen={this.state.isOpen} navbar key='AppNavBarCollapse' >
          {this.props.children}
        </Collapse>
      ];
    } else {
      finalnav = this.props.children;
    }

    return (
        <Navbar
        border='true'
        color={this.props.color}
        dark={this.props.color === 'dark'}
        light={this.props.color === 'light'}
        expand={this.props.expand}>
          <Container>
            {this.props.logo &&
              <NavbarBrand href="/">
                <Logo
                logo={this.props.logo}
                logoClassName={this.props.logoClassName} />
              </NavbarBrand>
            }
            {finalnav}
          </Container>
        </Navbar>
    );
  }
}


export default AppNavbar;
