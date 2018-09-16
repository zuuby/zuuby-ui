import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand } from 'reactstrap';

import Logo from './Logo';

class AppNavbar extends React.Component {
  static defaultProps = {
    logo: null,
    logoClassName: '',

    /*Nav behavior*/
    collapse: true,
  }
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
      finalnav = (
        <div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.children}
          </Collapse>
        </div>
      );
    } else {
      finalnav = this.props.children;
    }

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Container>
            {this.props.logo &&
              <NavbarBrand href="/"><Logo logo={this.props.logo} logoClassName={this.props.logoClassName} /></NavbarBrand>
            }
            {finalnav}
          </Container>
        </Navbar>
      </div>
    );
  }
}


export default AppNavbar
