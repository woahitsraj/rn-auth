import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header, Button, Spinner } from './components/commmon/'
import LoginForm from './components/LoginForm'

export default class App extends Component {
  state = {
    user: null
  }

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB0SbqHuiqslbbC6DEl713uiOjXakJ4ERM',
      authDomain: 'auth-aff20.firebaseapp.com',
      databaseURL: 'https://auth-aff20.firebaseio.com',
      projectId: 'auth-aff20',
      storageBucket: 'auth-aff20.appspot.com',
      messagingSenderId: '561036350035'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user : true
        })
      } else {
        this.setState({
          user : false
        })
      }
    })
  }

  renderContent = () => {
    if (this.state.user) {
      return (
        <Button onPress={() => { firebase.auth().signOut() }}>
          Log Out
        </Button>
      )
    } else if (this.state.user === null) {
      return (<Spinner size="large" />)
    } else {
      return (<LoginForm />)
    }
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}
