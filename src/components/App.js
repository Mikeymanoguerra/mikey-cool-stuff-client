
import React, { Component } from 'react';
import './App.css';
import { Header } from './header';
import { List } from './list';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {Menu } from './menu';

class App extends Component {
  render() {
    return (
      <div>
        <Redirect exact from='/' to='/App/List'/>
          <Route path='/App/' component={Header}/>
          <Route path='/menu/' exact component={Menu}/>
          <Route path='/App/List/' exact component={List}/>
      </div>
    );
  }
}

export default App;
