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
        <p name={area['@name']} key={area['@id']}>
          {area['@name']}
        </p>
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