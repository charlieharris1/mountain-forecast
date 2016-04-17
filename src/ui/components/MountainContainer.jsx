import React from 'React';
import MountainAreaList from './MountainAreaList.jsx';

const MountainContainer = React.createClass({
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
        <MountainAreaList data={this.state.data} />
      </div>
    );
  }
});

export default MountainContainer;
