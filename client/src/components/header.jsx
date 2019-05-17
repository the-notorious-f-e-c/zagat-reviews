import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="header">
        <h2>{this.props.currentRestaurant.name}</h2>
        <h4>{this.props.currentRestaurant.description}</h4>
        <a href="#" className="headerLink">{this.props.currentRestaurant.type}</a>
        <a href="#" className="headerLink">{this.props.currentRestaurant.location}</a>
        <a href="#" className="headerLink">{this.props.currentRestaurant.price}</a>
      </div>
    )
  }
}

export default Header;