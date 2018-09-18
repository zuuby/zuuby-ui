import React from 'react';
import $ from 'jquery';
import { Col } from 'reactstrap';
import Video from './Video';
// NOTE: you must manually put your own local video file here
import video from './resources/videos/It Ain’t Easy - LeBron James ft. Kevin Durant.mp4'

class AppContent extends React.Component {
  onClick () {
    $('#sidebar-col').toggleClass('col-1');
    $('#sidebar-col').toggleClass('col-3');
  }

  render() {
    return (
      <Col className="App-content">
        <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={this.onClick}>
              <i className="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
          </button>
          <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-align-justify"></i>
          </button>
          <Video src={video} />
      </Col>
    );
  }
}

export default AppContent;
