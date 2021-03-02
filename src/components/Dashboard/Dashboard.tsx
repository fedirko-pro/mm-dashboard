import React, { Component } from 'react';

import './Dashboard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChargingStation,
  faCogs,
  faHistory,
  faLifeRing,
  faLocationArrow,
  faMap,
  faMotorcycle,
  faTachometerAlt,
  faUser,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import Speedometer from '../Speedometer/Speedometer';

interface MainState {
  selectedTab: number;
  strokeDasharray?: string;
  strokeDashoffset?: number;
  strokeDashoffsetBack?: number;
}

export default class Dashboard extends Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      selectedTab: 8,
    };
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <div>
        <div className="hidden">{selectedTab}</div>
        <header>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faWifi} size="lg" />
          </div>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faMotorcycle} size="lg" />
          </div>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faMap} size="lg" />
          </div>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faLocationArrow} size="lg" />
          </div>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faLifeRing} size="lg" />
          </div>
        </header>
        <Speedometer />
        <footer>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </div>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faHistory} size="lg" />
          </div>
          <div className="menu_btn active">
            <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
          </div>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faChargingStation} size="lg" />
          </div>
          <div className="menu_btn">
            <FontAwesomeIcon icon={faCogs} size="lg" />
          </div>
        </footer>
      </div>
    );
  }
}
