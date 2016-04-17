const React = require('react');
import Area from './Area';

const MountainAreaList = React.createClass({
  render: function () {
    const areaNodes = this.props.data.map((area) => {
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

export default MountainAreaList;
