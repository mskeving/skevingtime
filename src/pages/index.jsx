import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

const format = 'h:mm a';

const gmt = 'Europe/Dublin';
const salamanca = 'Europe/Madrid';
const saratoga = 'America/New_York';
const houston = 'America/Monterrey';
const sanfran = 'America/Los_Angeles';

function TimeDisplay(props) {
  let onTimeChange = function(timeMoment) {
    props.updateTime(timeMoment, props.timezone)
  };

  return (
    <div>
      <div>{props.timezone}</div>
      <TimePicker
        showSecond={false}
        defaultValue={props.time}
        className="xxx"
        onChange={onTimeChange}
        format={format}
        value={props.time}
        use12Hours
      />
    </div>
  );
}

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeGMT: moment()
    };

    this.updateTime = this.updateTime.bind(this)
  }

  updateTime(timeMoment, timezone) {
    this.setState({
      timeGMT: moment().hour(2).minute(2)
    });
  }

  render() {
    return (
      <div>
        <TimeDisplay
          updateTime={this.updateTime}
          time={this.state.timeGMT}
          timezone={sanfran}
        />
      </div>
    );
  }
}

export default IndexPage;
