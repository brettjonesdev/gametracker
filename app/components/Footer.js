import React from 'react';
import {Link} from 'react-router';

/**
 * footer Component
 */
export default class Footer extends React.Component {
  /**
   * render
   * return {ReactElement} markup
   */
  render() {
    return (
      <footer>
        <div className="well well-lg">
          Created by <a href="http://twitter.com/brettjonesdev">@brettjonesdev</a>. Source code available on <a href="https://github.com/brettjonesdev/gametracker">github</a>
        </div>
      </footer>
    );
  }
}
