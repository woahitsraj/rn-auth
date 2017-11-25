import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

const Button = (props) => {
  const { buttonStyle, textStyle } = styles
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={buttonStyle}>
      <Text style={textStyle}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf : 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5
  },
  textStyle : {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight : '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
}

export { Button }
