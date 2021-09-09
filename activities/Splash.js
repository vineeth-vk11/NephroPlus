
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
 const Splash=()=>{
   return(
    <View style={styles.main}>
        {/* <Image
          style={styles.tinyLogo}
          source={require('../components/drawable/splash.png')}
        /> */}
        {/* <IntoSlider/> */}
        {/* <Otp_input/> */}
        {/* <ProfileDetails/> */}
        {/* <SelectAddress/> */}
        {/* <EligibilityCheck/> */}
        {/* <EligibilityResult/> */}
        {/* <MobileInput/> */}
        {/* <ServiceDetails/> */}
        {/* <SlotBooking/> */}
        {/* <Report/> */}
        <CheckOut/>
    </View>
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
 