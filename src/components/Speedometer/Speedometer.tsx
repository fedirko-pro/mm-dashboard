import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons';

import './Speedometer.scss';

interface MainState {
  speed: number;
  stroke: string;
  strokeDasharray?: string;
  strokeDashoffset?: number;
  strokeDashoffsetBack?: number;
}

export default class Speedometer extends Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      speed: 14,
      stroke: '#ffcc00',
    };
  }

  componentDidMount() {
    this.drawSpeedBar();
  }

  drawSpeedBar() {
    const { speed } = this.state;
    const circumference = 160 * 2 * Math.PI;
    // multiply to 0.75 to show 3/4 of circle
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset =
      circumference - ((speed * 0.75) / 100) * circumference;
    const strokeDashoffsetBack =
      circumference - ((100 * 0.75) / 100) * circumference;
    let stroke = '#ffcc00';
    if (speed > 80) {
      stroke = '#ff0000';
    } else if (speed > 50) {
      stroke = '#ff6600';
    }
    this.setState({
      stroke,
      strokeDasharray,
      strokeDashoffset,
      strokeDashoffsetBack,
    });
  }

  changeSpeed(e: React.ChangeEvent<HTMLInputElement>) {
    const speed = parseInt(e.target.value, 10);
    this.setState({ speed }, () => {
      this.drawSpeedBar();
    });
  }

  render() {
    const {
      speed,
      stroke,
      strokeDasharray,
      strokeDashoffset,
      strokeDashoffsetBack,
    } = this.state;
    return (
      <div className="screen speedometer">
        <div className="speed_box">
          <div className="speed">
            <div id="number" className="number">
              {speed}
            </div>
            <div className="unit">km/h</div>
          </div>
          <svg className="progress-ring back" width="400" height="400">
            <circle
              className="progress-ring__circle"
              stroke="rgb(0 0 0 / 20%)"
              strokeWidth="40"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffsetBack}
              r="160"
              cx="200"
              cy="200"
            />
          </svg>
          <svg className="progress-ring" width="400" height="400">
            <circle
              className="progress-ring__circle"
              stroke={stroke}
              strokeWidth="40"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              r="160"
              cx="200"
              cy="200"
            />
          </svg>
          <div className="battery">
            <FontAwesomeIcon icon={faBatteryThreeQuarters} size="lg" />
          </div>
        </div>
        <div className="drugger">
          <div>
            <div>Test speedometer by dragging:</div>
          </div>
          <div className="range">
            <input
              id="speed-range"
              value={speed}
              type="range"
              step="1"
              min="0"
              max="100"
              placeholder="progress"
              onChange={(e) => this.changeSpeed(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}
