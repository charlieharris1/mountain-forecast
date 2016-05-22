import React from 'react';

export default class Area extends React.Component {
  constructor() {
    super();
    this.state = {
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
        <h4 className="areaName" onClick={this.handleClick.bind(this)}> {this.props.name}: {this.props.children.Risk} {plusMinus}
          <p className="detailedAreaForecast">
            {detailedForecast}
          </p>
        </h4>
      </div>
    );
  }
}
