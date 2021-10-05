import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

// console.log(Stack, "stack");
const { Navigator, Screen } = createNativeStackNavigator();
const Root = () => (
  <Navigator>
    <Screen name="Home" component={HomeScreen}  />
    <Screen name="Profile" component={ProfileScreen} options={options => {
          console.log("options", options);
          return {
            headerLeft: null,
            title: "Connection",
            headerStyle: {
              backgroundColor: "orange",
            },
            headerTintColor:"white",
            headerTitleStyle:{
              fontSize: "bold"
            }
          };
        }}/>
  </Navigator>
)

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {/* <Navigator>
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="Login" component={LoginScreen} />
      </Navigator> */}
      <Navigator>
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="Login" component={LoginScreen}  />
        <Screen name="Root" component={Root} options={{
          hearLeft: null,
          // title: options.route.name
          }} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

