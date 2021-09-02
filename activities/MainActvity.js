import React,{Component,useState} from 'react';
import { BottomNavigation} from 'react-native-paper';
import {Text, View,StyleSheet} from 'react-native';
import HomePage from './Home';
import ServiceDetails from './ServiceDetails';

const Home = () => <HomePage/>;

const Bookings = () => <Text style={{color:'red'}}>servise</Text>;

const Profile = () => <Text style={{color:'red'}}>Recents</Text>;

const MainActivity = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home'},
    { key: 'bookings', title: 'Bookings'},
    { key: 'profile', title: 'Profile'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    bookings: Bookings,
    profile: Profile,
  });

  return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#9DC44D' }}
      />
  );
};
const styles = StyleSheet.create({
  main:{
      backgroundColor:'#fff',
      
  },
   text:{
      display:'flex',
      fontSize:24,
      position: 'absolute',
      top: 15,
      marginTop:10,
      color:'#000',
      textAlign:'center'
   }
});
export default MainActivity;