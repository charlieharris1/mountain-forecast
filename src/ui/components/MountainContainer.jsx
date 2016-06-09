import React from 'react';
import MountainAreaList from './MountainAreaList.jsx';
import axios from 'axios';
require('../../public/sass/client.scss');

export default class MountainContainer extends React.Component {
  constructor() {
    super();
    this.state = { weatherData: [] };
  }

  componentDidMount() {
    this.loadAreasFromServer();
    setInterval(this.loadAreasFromServer, 300000);
  }

  loadAreasFromServer() {
    axios.get('api/mountainAreas')
      .then((response) => this.setState({ weatherData: response.data }));
  }

  render() {
    return (
      <div className="mountainAreaListContainer">
        <MountainAreaList weatherData={this.state.weatherData} />
      </div>
    );
  }
}
