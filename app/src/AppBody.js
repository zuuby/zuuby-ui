import React from 'react';
import { Container, Row } from 'reactstrap';
import AppSidebar from './AppSidebar';
import AppContent from './AppContent';

class AppBody extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <AppSidebar />
          <AppContent />
        </Row>
      </Container>
    );
  }
}

export default AppBody;
