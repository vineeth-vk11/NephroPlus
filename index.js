
import React,{Node} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import MainActivity from './activities/MainActvity';

export default function Main() {
    return (
      <PaperProvider>
        {/* <App/> */}
        <MainActivity/>
      </PaperProvider>
    );
  }
  

AppRegistry.registerComponent(appName, () => Main);
