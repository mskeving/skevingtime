import moment from "moment-timezone";
import React, { Component } from "react";
import TimePicker from "rc-time-picker";

import "rc-time-picker/assets/index.css";

// time zones
const gmt = "Europe/Dublin";
const salamanca = "Europe/Madrid";
const saratoga = "America/New_York";
const houston = "America/Monterrey";
const sanfran = "America/Los_Angeles";

function TimeDisplay(props) {
  return (
    <div style={{
      textAlign: "center",
      width: "20%",
      fontFamily: "Arial, Futura, Impact, Helvetica, sans-serif",
      minWidth: "150px",
      margin: "10px"
    }}>
      <div >{props.title}</div>
      <div style={{margin: "auto"}}>
        <TimePicker
          showSecond={false}
          defaultValue={props.time}
          className="xxx"
          onChange={props.updateTime}
          format={"h:mm a"}
          value={props.time}
          use12Hours
        />
      </div>
    </div>
  );
}

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = this.getTimes()

    this.updateTime = this.updateTime.bind(this)
  }

  componentDidMount() {
    this.getTimes()
  }

  updateTime(timeMoment) {
    this.setState(this.getTimes(timeMoment));
  }

  getTimes(timeMoment) {
    let time = timeMoment || moment()  // default to now gmt
    return {
      timeGMT: moment.tz(time, gmt),
      timeSaratoga: moment.tz(time, saratoga),
      timeSanFran: moment.tz(time, sanfran),
      timeSalamanca: moment.tz(time, salamanca),
      timeHouston: moment.tz(time, houston)
    };

  }

  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}>
        <TimeDisplay
          title="San Francisco"
          updateTime={this.updateTime}
          time={this.state.timeSanFran}
          timezone={sanfran}
        />
        <TimeDisplay
          title="Houston"
          updateTime={this.updateTime}
          time={this.state.timeHouston}
          timezone={sanfran}
        />
        <TimeDisplay
          title="Saratoga Springs"
          updateTime={this.updateTime}
          time={this.state.timeSaratoga}
          timezone={saratoga}
        />
        <TimeDisplay
          title="Salamanca"
          updateTime={this.updateTime}
          time={this.state.timeSalamanca}
          timezone={saratoga}
        />
      </div>
    );
  }
}

export default IndexPage;
