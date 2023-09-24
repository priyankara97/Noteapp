import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Buttons from './Buttons'

const Login = () => {
  return (
   
      <View style={styles.LogForm}>
        <TextInput placeholder='User name or email' style={styles.UserInput} />
        <TextInput placeholder='Password ' style={styles.UserInput} />
        <Buttons name="Login" style={{ backgroundColor: "blue", color: "white", textAlign: "center", justifyContent: "center", alignItems: "center", fontSize: 18, padding: 7, width: 170, }} />

      </View>
   

  )
}

export default Login

const styles = StyleSheet.create({
  UserInput: {
    borderWidth: 1,
    width: 280,

  },
  LogForm: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
    marginTop:80
  },

})