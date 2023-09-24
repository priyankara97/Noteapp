import 'react-native-gesture-handler';

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import Register from './Components/Register';
import Login from './Components/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Components/Home';

const Stack = createStackNavigator();


const App = () => {
  return (
    <SafeAreaProvider>
      
      <NavigationContainer>
    
      <Stack.Navigator >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    
    </NavigationContainer>
      
    </SafeAreaProvider>
  )
}

export default App
const styles = StyleSheet.create({

  mainPage: {
    padding: 100,
    marginTop:50,
  }
})