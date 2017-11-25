import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/commmon/'
import LoginForm from './components/LoginForm'

export default class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB0SbqHuiqslbbC6DEl713uiOjXakJ4ERM',
      authDomain: 'auth-aff20.firebaseapp.com',
      databaseURL: 'https://auth-aff20.firebaseio.com',
      projectId: 'auth-aff20',
      storageBucket: 'auth-aff20.appspot.com',
      messagingSenderId: '561036350035'
    })
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}
