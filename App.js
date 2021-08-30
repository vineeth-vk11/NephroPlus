
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

const App = () => {

  return (
    <View>
        <Splash/>
    </View>
  );
};

export default App;
