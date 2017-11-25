import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder }) => {
  const { inputStyles, labelStyles, containerStyle } = styles
  return (
    <View style={containerStyle}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyles}
        value={value}
        onChangeText={onChangeText} />
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func
}

const styles = {
  inputStyles : {
    color : '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyles : {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input }