var Area = React.createClass({
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
  }
});

const MountainAreaBox = React.createClass({
  loadAreasFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.loadAreasFromServer();
    setInterval(this.loadAreasFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Mountain Areas</h1>
        <MountainAreaList data={this.state.data} />
      </div>
    );
  }
});

const MountainAreaList = React.createClass({
  render: function() {
    const areaNodes = this.props.data.map(function(area) {
      return (
        <Area name={area.Area} key={area.Area}>
          {area}
        </Area>
      );
    });
    return (
      <div className="commentList">
        {areaNodes}
      </div>
    );
  },
});

ReactDOM.render(
  <MountainAreaBox url="/api/mountainAreas" pollInterval={30000} />,
  document.getElementById('mountain-area')
);