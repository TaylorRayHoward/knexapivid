import React, { Component } from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="container">
          <ItemsBody />
        </div>
      </div>
    );
  }
}

export default App;
