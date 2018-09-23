import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import VideoContent from './VideoContent';
import './AppContent.css';

class AppContent extends React.Component {

  render() {
    return (
      <Col className='App-content'>
        <Container fluid className='App-content-container'>
          <Row>
            <Col> {/* Empty Cols for now*/}
            </Col>
            <VideoContent />
            <Col> {/* Empty Cols for now*/}
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}

export default AppContent;
