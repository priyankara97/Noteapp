import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = (props) => {
  return (
    <View>
       <TouchableOpacity  >
        <Text style={props.style}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Buttons