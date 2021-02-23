import React, { Component } from 'react';

interface MainState {
  speed: number;
  stroke: string;
  strokeDasharray?: string;
  strokeDashoffset?: number;
}

export default class Dashboard extends Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      speed: 35,
      stroke: '#ffcc00',
    };
  }

  componentDidMount() {
    this.drawSpeedBar();
  }

  drawSpeedBar() {
    const { speed } = this.state;
    const circumference = 130 * 2 * Math.PI;
    // multiply to 0.75 to show 3/4 of circle
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset =
      circumference - ((speed * 0.75) / 100) * circumference;
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
    });
  }

  changeSpeed(e: React.ChangeEvent<HTMLInputElement>) {
    const speed = parseInt(e.target.value, 10);
    this.setState({ speed }, () => {
      this.drawSpeedBar();
    });
  }

  render() {
    const { speed, stroke, strokeDasharray, strokeDashoffset } = this.state;
    return (
      <div>
        <header>
          <h1>Marichka Motors Dashboard</h1>
        </header>
        <main>
          <div className="container">
            <div className="content">
              <div>
                <div className="speed">
                  <div id="number" className="number">
                    {speed}
                  </div>
                  <div className="unit">km/h</div>
                </div>
                <svg className="progress-ring" width="300" height="300">
                  <circle
                    className="progress-ring__circle"
                    stroke={stroke}
                    strokeWidth="20"
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    r="130"
                    cx="150"
                    cy="150"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <div>Test speedometer by dragging:</div>
                </div>
                <div className="range">
                  <input
                    id="speed-range"
                    value={speed}
                    type="range"
                    step="5"
                    min="0"
                    max="100"
                    placeholder="progress"
                    onChange={(e) => this.changeSpeed(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <h2>Footer menu will be here</h2>
        </footer>
      </div>
    );
  }
}
