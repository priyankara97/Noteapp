import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Buttons from './Buttons'

const Register = ({navigation}) => {
  return (
    <View style={styles.RegForm}>
      <TextInput placeholder='User name' style={styles.UserInput} />
      <TextInput placeholder='Email' style={styles.UserInput} />
      <TextInput placeholder='Password ' style={styles.UserInput} />
      <TextInput placeholder='Confirm password' style={styles.UserInput} />
      <Buttons onPress={() => { navigation.navigate('Login') }}  name="Register" style={{backgroundColor:"green",color: "white", textAlign: "center", justifyContent: "center", alignItems: "center", fontSize: 18,padding:7,width:170,}}/>
<Button title='login' onPress={() => { navigation.navigate('Login') }}></Button>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  UserInput: {
    borderWidth: 1,
    width: 280,

  },
  RegForm: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
  }

})