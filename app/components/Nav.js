import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div><Link to="/">GameTracker</Link></div>
      </nav>
    );
  }
}
