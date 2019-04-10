require("../src/less/base.less");
require("./app.less");

import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { BigInputMoment } from "../src/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMoment: moment(),
      bigInputMoment: moment(),
      datePickerMoment: moment(),
      datePickerRangeStartMoment: moment().subtract(3, "days"),
      datePickerRangeEndMoment: moment(),
      timePickerMoment: moment(),
      showSeconds: true,
      locale: "en",
      size: "medium"
    };
  }

  render() {
    let { bigInputMoment, showSeconds, locale, size } = this.state;
    let wrapperClass = "wrapper " + size;

    return (
      <div className="app">
        <div className="header">React Input Moment</div>

        <div className="header">BigInputMoment</div>
        <input
          className="output"
          type="text"
          value={bigInputMoment.format("llll")}
          readOnly
        />
        <div className={wrapperClass}>
          <BigInputMoment
            moment={bigInputMoment}
            locale={locale}
            showSeconds={showSeconds}
            onChange={mom => this.setState({ bigInputMoment: mom })}
          />
        </div>
      </div>
    );
  }

  handleShowSeconds(e) {
    this.setState({ showSeconds: e.target.checked });
  }

  handleLocale(e) {
    this.setState({ locale: e.target.value });
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

//testing
window.moment = moment;
