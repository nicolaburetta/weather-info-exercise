import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityList extends Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return this.props.weather.map(item => {
      return (
        <li
          className="list-group-item"
          key={item.name} >
          <div className="row">
            <div className="col-md-4">
              {item.name}
            </div>
            <div className="col-md-4">
              {item.weather.description}
            </div>
            <div className="col-md-4">
              <span className="glyphicon glyphicon-remove"></span>
              <span className="glyphicon glyphicon-repeat"></span>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        { this.renderItems() }
      </ul>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(CityList);
