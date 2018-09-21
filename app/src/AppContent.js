import React from 'react';
import { Col } from 'reactstrap';
import Video from './Video';
// NOTE: you must manually put your own local video file here
import video from './resources/videos/It Ain’t Easy - LeBron James ft. Kevin Durant.mp4'

class AppContent extends React.Component {

  render() {
    return (
      <Col className="App-content">
          <Video src={video} />
      </Col>
    );
  }
}

export default AppContent;
