import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Github, Twitter, Linkedin, Facebook } from 'react-feather';
import './AppFooter.css';

// TODO: needs a refactor similar to AppHeader
class AppFooter extends React.Component {
  render() {
    return (
      <footer className='AppFooter'>
        <Container>
          <Row>
            <Col xs='4'>
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
            <Col xs='1'>
                <Facebook />
            </Col>
            <Col xs='4'>
            </Col>
          </Row>
          <Row>
            <Col xs='12'>
              Created my free logo at <a className='zuuby-link' href="https://logomakr.com">LogoMakr.com</a>
            </Col>
          </Row>
          <Row>
          <Col xs='12'>
            Powered by <a className='zuuby-link' href="https://ipfs.io">IPFS</a>
          </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default AppFooter;
