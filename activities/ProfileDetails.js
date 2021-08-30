
 import React,{Component} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
   TextInput,
   TouchableOpacity
 } from 'react-native';
 const ProfileDetails=()=>{
   return(
     <>
        <Image
          style={styles.tinyLogo}
          source={require('../components/drawable/icon.png')}/>
        <View style={styles.main}>
          <Text style={styles.text}>Profile Details</Text>
          <View style={{flexDirection:'column'}}>
            <TextInput
                style={styles.input}
                keyboardType="text"
                placeholder="Name"
                placeholderTextColor="#7C7C7C"
            />
            <TextInput
                style={styles.input}
                keyboardType="text"
                placeholder="Email"
                placeholderTextColor='#7C7C7C'
            />
          </View>   
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'>
          <Text style={styles.label}>NEXT</Text>
        </TouchableOpacity>
    </>
   );
 }
 const styles = StyleSheet.create({
     input:{
        width:Dimensions.get('window').width-100,
        marginLeft:"15%",
        marginRight:"15%",
        color:'black',
        paddingLeft:15,
        marginBottom:'5%',
        borderColor:"#9DC44D",
        borderWidth:1,
     },
     bottom_container:{
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 0,
      width:Dimensions.get('window').width,
   },
    label:{
      backgroundColor:'#9DC44D',
      fontSize:18,
      paddingTop:10,
      paddingBottom:10,
      textAlign:'center',
      color:'#ffffff'
  },
     text:{
        display:'flex',
        marginBottom:'17%',
        fontSize:24,
        fontWeight:'bold'
     },
     subtext:{
        display:'flex',
        marginBottom:'17%',
        marginTop:'5%',
        fontSize:12
     },
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    tinyLogo: {
        display:'flex',
        bottom:'25%'
      }
  });
 
 export default ProfileDetails;
 