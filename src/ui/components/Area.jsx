import React from 'react';

const Area = React.createClass({
  getInitialState: function() {
    return { more: false };
  },
  handleClick: function(event) {
    this.setState({ more: !this.state.more });
  },
  render: function() {
    var detailedForecast = this.state.more ? 'Detailed forecast' : '';
    var plusMinus = this.state.more ? '-' : '+';
    return (
      <div className="area">
        <h4 className="areaName" onClick={this.handleClick}> {this.props.name}: {this.props.children.Risk} {plusMinus}
          <p className="detailedAreaForecast">
            {detailedForecast}
          </p>
        </h4>
      </div>
    );
  },
});

export default Area;
