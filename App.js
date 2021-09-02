
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

const App = () => {

  return (
    <View>
        <Splash/>
    </View>
  );
};

export default App;
