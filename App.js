
import React,{Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import Splash from './activities/Splash'
import MainActivity from './activities/MainActvity';
import { NavigationContainer } from '@react-navigation/native';
const login=false;
const App = () => {

  return (
    login?<MainActivity/>:<Splash/>
  );
};

export default App;
