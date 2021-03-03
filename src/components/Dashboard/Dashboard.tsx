import React, { Component } from 'react';

import './Dashboard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChargingStation,
  faCogs,
  faHistory,
  faLifeRing,
  faLocationArrow,
  faMotorcycle,
  faMusic,
  faTachometerAlt,
  faUser,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import Speedometer from '../Speedometer/Speedometer';
import Settings from '../Settings/Settings';

interface MainState {
  screen: string;
}

export default class Dashboard extends Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      screen: 'speedometer',
    };
  }

  getScreen = () => {
    const { screen } = this.state;
    switch (screen) {
      case 'speedometer':
        return <Speedometer />;
      case 'settings':
        return <Settings />;
      default:
        return <Speedometer />;
    }
  };

  /** select active tab * */
  activate({ target }: { target: any }) {
    const buttons: Element[] = Array.from(
      document.getElementsByClassName('menu_btn')
    );
    buttons.forEach((button: Element) => {
      button.classList.remove('active');
    });
    const screen = target.getAttribute('data-screen');
    target.classList.add('active');
    this.setState({ screen });
  }

  render() {
    return (
      <div>
        <div className="header">
          <button
            type="button"
            className="menu_btn"
            data-screen="settings"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faWifi} size="lg" />
          </button>
          <button
            type="button"
            className="menu_btn"
            data-screen="moto"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faMotorcycle} size="lg" />
          </button>
          <button
            type="button"
            className="menu_btn"
            data-screen="music"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faMusic} size="lg" />
          </button>
          <button
            type="button"
            className="menu_btn"
            data-screen="location"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faLocationArrow} size="lg" />
          </button>
          <button
            type="button"
            className="menu_btn"
            data-screen="help"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faLifeRing} size="lg" />
          </button>
        </div>
        {this.getScreen()}
        <div className="footer">
          <button
            type="button"
            className="menu_btn"
            data-screen="user"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
          <button
            type="button"
            className="menu_btn"
            data-screen="history"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faHistory} size="lg" />
          </button>
          <button
            type="button"
            className="menu_btn active"
            data-screen="speedometer"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
          </button>
          <button
            type="button"
            className="menu_btn"
            data-screen="charging"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faChargingStation} size="lg" />
          </button>
          <button
            type="button"
            className="menu_btn"
            data-screen="settings"
            onClick={(e) => this.activate(e)}
          >
            <FontAwesomeIcon icon={faCogs} size="lg" />
          </button>
        </div>
      </div>
    );
  }
}
