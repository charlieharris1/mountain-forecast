import React, { PropTypes } from 'react';
import axios from 'axios';
require('../../public/sass/client.scss');

export default class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      risk: this.props.risk,
      uri: this.props.uri,
      data: {},
      more: false,
    };
  }
  componentDidMount() {
    this.loadAreaDetail();
    setInterval(this.loadAreaDetail, 300000);
  }
  handleClick() {
    this.setState({ more: !this.state.more });
  }
  loadAreaDetail() {
    axios.get('api/areaSpecificData', {
      params: {
        uri: this.state.uri,
      },
    })
    .then((response) => this.setState({ data: response.data }));
  }
  render() {
    const detailedForecast = this.state.more ? this.state.data.report.Overview : '';
    const plusMinus = this.state.more ? '-' : '+';
    let riskTextStyle = `risk-${this.state.risk.toLowerCase()}`;
    riskTextStyle = riskTextStyle.replace(/\s+/g, '-');

    return (
      <div className="area">
        <div className="areaName" onClick={this.handleClick.bind(this)}>
          <h4> {this.state.name}: <span className={riskTextStyle}>{this.state.risk}</span> {plusMinus}</h4>
          <p className="detailedAreaForecast">
            {detailedForecast}
          </p>
        </div>
      </div>
    );
  }
}

Area.propTypes = {
  name: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  risk: PropTypes.string.isRequired,
};
