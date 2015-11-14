import React from 'react';
import PureComponent from 'react-pure-render/component';
import {Link} from 'react-router';

export default class Root extends PureComponent {

  render() {
    return (
      <div className="root">
        <h2>Root component</h2>

        <p>
          This app demonstrates using Rails together with React,
          Webpack and some other usefull tools:
        </p>

        <ul>
          <li>Rails</li>
          <li>React</li>
          <li>Webpack</li>
          <li>Redux</li>
          <li>React Router</li>
          <li>Immutable</li>
          <li>Karma</li>
          <li>Jasmine</li>
          <li>ES Lint</li>
        </ul>

        <ul>
          <li><Link to="/">Component A (Home)</Link></li>
          <li><Link to="/component-b">Component B</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }

}
