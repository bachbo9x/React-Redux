import React, { Component } from 'react'
import './App.css';
import Menu from 'components/Menu/Menu'
import ProductList from 'components/ProductList/ProductList'
import { routes } from 'routes'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Menu />
      <div className="container">
        <div className="row">
          {showContentMenus(routes)}
        </div>
      </div>
    </Router>
  );
}

const showContentMenus = (routes) => {
  let result = null
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      )
    })
  }
  return <Switch>{result}</Switch>
}

export default App;
