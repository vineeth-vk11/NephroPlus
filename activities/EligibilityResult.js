
 import React,{Component} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
   TextInput,
   TouchableOpacity,
 } from 'react-native';
 import CheckBox from '@react-native-community/checkbox';

 const result=true;
 
 const EligibilityResult=()=>{
   return(
     <>
        <Text style={styles.text}>Eligibility Result</Text>
        <View style={styles.main}>
            <Image
            style={styles.tinyLogo}
            source={require(result?'../components/drawable/accept.png':'../components/drawable/decline.png')}/>
            <Text  style={styles.subtext} style={{fontWeight:'bold',textAlign:'center'}}>{result?"Thanks for giving us your details.":"Sorry! But there may be some constraints in your home that may not be suited to Dialysis on Call services."}</Text>
            <Text  style={styles.subtext}>{result?"We are delighted to inform you that your home is well-suited for Dialysis on Call services!":"Our team will contact you shortly to discuss further."}</Text>
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'>
          <Text style={styles.label}>{result?"NEXT":"TAKE ELIGIBILITY CHECK AGAIN"}</Text>
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
        textAlign:'center'
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
 
 export default EligibilityResult;
 