import React, {Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
import Registration from './Registrationpage';
import Login from'./Login';
import Indegredients from'./Indegredients';

const screens={
  Login: {
    screen: Login
  },
  Home: {
     screen: Home
  },
  Registration: {
      screen: Registration
  },
  Indegredients: {
    screen: Indegredients
  },
}


const App=createStackNavigator (screens);

export default createAppContainer(App);