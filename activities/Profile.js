
 import React,{Component,useState} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
   TextInput,
   TouchableOpacity,
    } from 'react-native';
 
 const Profile=()=>{
   return(
    <View style={{paddingLeft:'5%',paddingTop:'25%',backgroundColor:'white',height:'100%'}}>
        <View>
          <Text style={{color:'#00000080'}}>Name</Text>
          <Text style={{color:'#00000080'}}>Email</Text>
          <Text style={{color:'#00000080'}}>987 654 3210</Text>
        </View>
        <View style={{marginTop:'5%'}}> 
          <View style={{flexDirection:'row'}}>
            <Image source={require('../components/drawable/onboarding1.png')} style={{width:25,height:25}}/>
            <Text style={{marginLeft:'8%'}}>Take Eligibility test</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <Image source={require('../components/drawable/onboarding1.png')} style={{width:25,height:25}}/>
            <Text style={{marginLeft:'8%'}}>About us</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <Image source={require('../components/drawable/onboarding1.png')} style={{width:25,height:25}}/>
            <Text style={{marginLeft:'8%'}}>Manage address</Text>
          </View>

          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <Image source={require('../components/drawable/onboarding1.png')} style={{width:25,height:25}}/>
            <Text style={{marginLeft:'8%'}}>History</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <Image source={require('../components/drawable/onboarding1.png')} style={{width:25,height:25}}/>
            <Text style={{marginLeft:'8%'}}>Contact us</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <Image source={require('../components/drawable/onboarding1.png')} style={{width:25,height:25}}/>
            <Text style={{marginLeft:'8%'}}>Logout</Text>
          </View>

        </View>
    </View>
   );
 }
 
 
 export default Profile;
 