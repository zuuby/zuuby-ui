import React from 'react';
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Grid, Headphones, Search, Tv } from 'react-feather'
import './AppSidebar.css';

class AppSidebar extends React.Component {
    render() {
        return (
          <Col id='sidebar-col' xs='1'>
          <Nav vertical id="sidebar">
            <div className="sidebar-header">
              <h3>zuuby</h3>
            </div>
            <NavItem className='active'>
              <NavLink href="#"><Search /></NavLink>
            </NavItem>
            <NavItem className='active'>
              <NavLink href="#"><Grid /></NavLink>
            </NavItem>
            <NavItem className='active'>
              <NavLink href="#"><Headphones /></NavLink>
            </NavItem>
            <NavItem className='active'>
              <NavLink href="#"><Tv /></NavLink>
            </NavItem>
          </Nav>
          </Col>
        //   <nav id="sidebar">
        //   <div className="sidebar-header">
        //     <h3>Zuuby</h3>
        //     <strong>Z</strong>
        //   </div>
        //
        //     <ul className="list-unstyled components">
        //         <li>
        //             <a href="#">
        //                 <i className="fas fa-briefcase"></i>
        //                 About
        //             </a>
        //             <a>
        //                 <i className="fas fa-copy"></i>
        //                 Pages
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#">
        //                 <i className="fas fa-image"></i>
        //                 Portfolio
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#">
        //                 <i className="fas fa-question"></i>
        //                 FAQ
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#">
        //                 <i className="fas fa-paper-plane"></i>
        //                 Contact
        //             </a>
        //         </li>
        //     </ul>
        //
        //     <ul className="list-unstyled CTAs">
        //         <li>
        //             <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
        //         </li>
        //         <li>
        //             <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
        //         </li>
        //     </ul>
        // </nav>
        );
    }
}

export default AppSidebar;
