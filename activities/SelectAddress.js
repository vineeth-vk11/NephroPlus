
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
 const SelectAddress=({navigation})=>{
   return(
    <View style={{backgroundColor:'white', 
                  width:Dimensions.get('window').width,
                  justifyContent:'center',
                  alignItems:'center',
                  height:Dimensions.get('window').height}}>
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
          <TouchableOpacity
            style={styles.bottom_container}
            underlayColor='#fff'
            onPress={()=>{navigation.navigate('EligibilityCheck')}}>
            <Text style={styles.label}>NEXT</Text>
          </TouchableOpacity>
        </View>
        
    </View>
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
      width:Dimensions.get('window').width,
      marginTop:'auto',
      height:100
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
      alignItems:'center',
      marginTop:'auto',
    },
    tinyLogo: {
        display:'flex',
        bottom:'25%'
      }
  });
 
 export default SelectAddress;
 