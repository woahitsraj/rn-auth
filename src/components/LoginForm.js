import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './commmon/'

export default class LoginForm extends Component {
  state = {
    email : '',
    password: '',
    loading: false
  }

  onButtonPress = () => {
    this.setState({
      error: null,
      loading: true
    })
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess()
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.onLoginSuccess()
          })
          .catch(() => {
            this.onLoginFail()
          })
      })
  }

  onLoginFail = () => {
    this.setState({
      error : 'Authentication failed',
      loading: false
    })
  }

  onLoginSuccess = () => {
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: ''
    })
  }

  renderButton () {
    if (this.state.loading) {
      return (<Spinner size="small" />)
    } else {
      return (
        <Button
          onPress={this.onButtonPress}>
          Log in
        </Button>
      )
    }
  }

  render () {
    const { errorTextStyle } = styles
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@example.com"
            value={this.state.email}
            onChangeText={
              (email) => {
                this.setState({ email })
              }
            } />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={this.state.password}
            secureTextEntry
            onChangeText={
              (password) => {
                this.setState({ password })
              }
            }
          />
        </CardSection>
        <Text style={errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
