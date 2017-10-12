import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p>Hot off the press!</p>;
  }
}

render(<App/>, document.getElementById('app'));