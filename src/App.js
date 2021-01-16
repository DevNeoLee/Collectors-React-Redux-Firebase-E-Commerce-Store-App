import { Switch, Route } from 'react-router-dom'
import React, { Component }  from 'react';

import Homepage from './pages/homepage/homepage'
import Shoppage from './pages/shoppage/shoppage'
import Loginpage from './pages/loginpage/loginpage'

import Header from './components/header/header'

import { auth } from './firebase/utils'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <>
        <Header currentUser = { this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/login" component={Loginpage} />
        </Switch>
      </>
    )
  }
}