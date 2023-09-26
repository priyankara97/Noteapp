import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Register = ({ navigation }) => {
  const [userName, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const saveTravelers = () => {
    fetch('http://192.168.8.100:3000/travelers', {
      method: 'POST',
      body: JSON.stringify({
        username:userName,
        email:email,
        password:password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  

  };




  return (
    <View style={styles.RegForm}>
      <TextInput value={userName} onChangeText={(val) => {setName(val)}} placeholder='User name' style={styles.UserInput} />
      <TextInput value={email} onChangeText={(val) => {setEmail(val)}} placeholder='Email' style={styles.UserInput} />
      <TextInput value={password} onChangeText={(val) => {setPassword(val)}} placeholder='Password ' style={styles.UserInput} />
      {/* <TextInput placeholder='Confirm password' style={styles.UserInput} /> */}
      <TouchableOpacity onPress={()=>{saveTravelers()}}  style={{ backgroundColor: "green", color: "white", textAlign: "center", justifyContent: "center", alignItems: "center", fontSize: 18, padding: 7, width: 170, }}><Text style={{ color: "white", fontSize: 18 }}>Register</Text></TouchableOpacity>

      {/* <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={{ backgroundColor: "green", color: "white", textAlign: "center", justifyContent: "center", alignItems: "center", fontSize: 18, padding: 7, width: 170, }}><Text style={{ color: "white", fontSize: 18 }}>Register</Text></TouchableOpacity> */}
      <Button  onPress={()=>{saveTravelers()}} title='Save student'></Button>

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
    padding: 20,
    marginTop: 112
  }

})