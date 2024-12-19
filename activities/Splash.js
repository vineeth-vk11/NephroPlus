
 import React,{Component} from 'react';
 import {
     BackHandler,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   Dimensions
 } from 'react-native';
import IntoSlider from './IntoSliders';
import MobileInput from './Mobile_input';
import Otp_input from './Otp_input';
import ProfileDetails from './ProfileDetails.js'
import SelectAddress from './SelectAddress.js'
import EligibilityCheck from './EligibilityCheck.js'
import EligibilityResult from './EligibilityResult.js'
import ServiceDetails from './ServiceDetails';
import SlotBooking from './SlotBooking';
import Report from './Report';
import CheckOut from './CheckOut';
import VerticalStepIndicator from './StepIndicator';
import OrderTracking from './OrderTracking';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainActivity from './MainActvity';

const Stack = createNativeStackNavigator();
 const Splash=()=>{
   return(
    // <View style={styles.main}>
      <Stack.Navigator  initial={Otp_input}
        initialRouteName={Otp_input}>
        <Stack.Screen 
          name="IntoSlider" 
          component={IntoSlider} 
          options={{ title: 'Nephro Plus' }}/>
        <Stack.Screen 
          name="MainActivity" 
          component={MainActivity}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name="OrderTracking"
          component={OrderTracking}
          options={{ title: 'OrderTracking' }}/>
        <Stack.Screen
          name="VerticalStepIndicator"
          component={VerticalStepIndicator}
          options={{ title: 'Order tracking' }}/>
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{ title: 'CheckOut' }}/>
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ title: 'Report' }}/>
        <Stack.Screen
          name="ServiceDetails"
          component={ServiceDetails}
          options={{ title: 'ServiceDetails' }}/>
        <Stack.Screen
          name="MobileInput"
          component={MobileInput}
          options={{ title: 'MobileInput' }}/>
        <Stack.Screen
          name="EligibilityResult"
          component={EligibilityResult}
          options={{ title: 'EligibilityResult' }}/>
        <Stack.Screen
          name="EligibilityCheck"
          component={EligibilityCheck}
          options={{ title: 'EligibilityCheck' }}/>
         <Stack.Screen
          name="SelectAddress"
          component={SelectAddress}
          options={{ title: 'SelectAddress' }}/> 
         <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{ title: 'ProfileDetails' }}/> 
        <Stack.Screen
          name="Otp_input"
          component={Otp_input}
          options={{ title: 'OTP Input' }}/> 
      
        
      </Stack.Navigator>
          // {/* <Image
          //   style={styles.tinyLogo}
          //   source={require('../components/drawable/splash.png')}
          // />  */}
    //  </View>
   );
 }
 const styles = StyleSheet.create({
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    tinyLogo: {
        display:'flex',
        alignContent:'center',
        alignItems:'center'
      }
  });
 
 export default Splash;
 