
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
 
 const OrderPlaced=()=>{
   return(
     <View style={{height:'100%'}}>
        <Text style={styles.text}>Eligibility Result</Text>
        <View style={styles.main}>
            <Image
            style={styles.tinyLogo}
            source={require('../components/drawable/accept.png')}/>
            <Text  style={styles.subtext} style={{fontWeight:'bold',textAlign:'center',fontSize:24,lineHeight:28.13,marginBottom:30}}>Order Placed</Text>
            <Text  style={styles.subtext} style={{fontWeight:'bold',textAlign:'center'}}>Thanks for placing an order on Dialysis on Call from NephroPlus.</Text>
            <Text  style={{marginLeft:'15%',marginRight:'15%',textAlign:'center',marginTop:10}}>You have just opted for convenience and quality rolled into one!</Text>
        </View>
    </View>
   );
 }
 const styles = StyleSheet.create({
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
        textAlign:'center'
     },
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%'
    },
    tinyLogo: {
        display:'flex',
        marginBottom:20
      }
  });
 
 export default OrderPlaced;
 