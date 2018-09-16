import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Github, Twitter, Linkedin } from 'react-feather';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <Container>
          <Row>
            <Col xs='6'>
              Follow Zuuby
            </Col>
            <Col xs='3'>
            </Col>
            <Col xs='1'>
              <Github />
            </Col>
            <Col xs='1'>
              <Twitter />
            </Col>
            <Col xs='1'>
                <Linkedin />
            </Col>
          </Row>
          <Row>
            <Col xs='12'>
              Created my free logo at <a className='zuuby-link' href="https://logomakr.com">LogoMakr.com</a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
