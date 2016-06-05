import React, { PropTypes } from 'react';
import axios from 'axios';

export default class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      risk: this.props.children.Risk,
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

    return (
      <div className="area">
        <h4 className="areaName" onClick={this.handleClick.bind(this)}> {this.state.name}: {this.state.Risk} {plusMinus}
          <p className="detailedAreaForecast">
            {detailedForecast}
          </p>
        </h4>
      </div>
    );
  }
}

Area.propTypes = {
  name: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
