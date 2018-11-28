// import libaries
import React, { Component } from 'react';

// import components
import TwiskerEditor from './editor/TwiskerEditor';

export default class App extends Component{
  render() {
    return (
      <div id="twiskerEditor">
        <TwiskerEditor />
      </div>
    );
  }
}

