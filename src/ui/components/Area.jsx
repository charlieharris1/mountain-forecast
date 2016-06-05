import React, { PropTypes } from 'react';

export default class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      risk: this.props.children.Risk,
      more: false,
    };
  }
  handleClick() {
    this.setState({ more: !this.state.more });
  }

  render() {
    const detailedForecast = this.state.more ? 'Detailed forecast' : '';
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
  children: PropTypes.object.isRequired,
};
