import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
const CardSection = (props) => {
  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  viewStyle : {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position : 'relative'
  }
}

CardSection.propTypes = {
  children: PropTypes.node
}

export { CardSection }
