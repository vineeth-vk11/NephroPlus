
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
 const SelectAddress=()=>{
   return(
     <>
        <Text style={styles.text}>Select Address</Text>
        <View style={styles.main}>
          <View style={{flexDirection:'column'}}>
            <Text  style={styles.subtext}>Google maps address text. Google maps address text. </Text>
            <TextInput
                style={styles.input}
                keyboardType="text"
                placeholder="House/Flat no"
                placeholderTextColor="#7C7C7C"
            />
            <TextInput
                style={styles.input}
                keyboardType="text"
                placeholder="Landmark"
                placeholderTextColor="#7C7C7C"
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
        borderBottomColor:"#9DC44D",
        borderBottomWidth:1,
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
        fontSize:24,
        position: 'absolute',
        top: 15,
     },
     subtext:{
        width:Dimensions.get('window').width-100,
        marginLeft:"15%",
        marginRight:"15%",
        color:'black',
        paddingLeft:15,
        marginBottom:'5%',
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
 
 export default SelectAddress;
 