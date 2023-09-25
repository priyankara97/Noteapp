import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
   
      <View style={styles.LogForm}>
        <TextInput placeholder='User name or email' style={styles.UserInput} />
        <TextInput placeholder='Password ' style={styles.UserInput} />
        <TouchableOpacity  onPress={() => { navigation.navigate('Home') }} style={{backgroundColor:"green", textAlign: "center", justifyContent: "center", alignItems: "center",padding:7,width:170,}}><Text style={{color:"white",fontSize: 18}}>Login</Text></TouchableOpacity>

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
    padding:20,
    marginTop:180
  },

})