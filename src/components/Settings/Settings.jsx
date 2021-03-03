import React, { Component } from 'react';

import './Settings.scss';

class Settings extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      click: 0,
    };
  }

  click() {
    this.setState((prevState) => ({
      click: prevState.click + 1,
    }));
  }

  render() {
    const { click } = this.state;
    return (
      <div className="screen settings">
        <h1>X: 0</h1>
        <h1>Y: 0</h1>
        <h1>Z: 0</h1>
        <hr />
        <h1>{click}</h1>
        <button type="button" onClick={() => this.click()}>
          Click
        </button>
      </div>
    );
  }
}

export default Settings;
