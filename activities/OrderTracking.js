
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
 import RNBounceable from "react-native-bouncy-checkbox";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import DropDownPicker from 'react-native-dropdown-picker';
 
 const OrderTracking=()=>{
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
   return(
     <>
        <Text style={styles.text}>Eligibility Check</Text>
        <View style={styles.main}>
                <View style={{paddingLeft:'3%',paddingRight:'3%',marginTop:'auto',marginBottom:'14%'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16,fontWeight:"bold",color:'#110508'}}>Order#1</Text>
                        <Text style={{fontSize:14,marginLeft:'auto',color:'#424242'}}>Arriving in 39 minutes</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <View style={{marginRight:'auto'}}>
                            <Text style={{fontSize:14,color:'#424242'}}>Silver Package Homedialysis</Text>
                            <Text style={{fontSize:14,color:'#424242'}}>+ 2 items</Text>
                        </View>
                        <View style={{marginLeft:'auto'}}>
                            <Text style={{borderRadius:5,fontSize:14,color:'#424242',marginLeft:'auto',marginTop:2,backgroundColor:'#9DC44D',paddingLeft:15,paddingRight:15,padding:5,color:'#ffffff',width:"100%"}}>
                                Call driver
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.bottom_container}
                    underlayColor='#fff'>
                    <Text style={styles.label}>ORDER DETAILS</Text>
                </TouchableOpacity>
        </View>
        
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
        marginTop:10,
     },
     subtext:{
        color:'black',
        marginBottom:'2%',
        marginTop:'4%',
        fontWeight:'bold'
     },
    main:{
        flex:1,
        backgroundColor:'white',
        width:Dimensions.get('window').width,
        display:'flex',
        flexDirection:'column'
    },
    tinyLogo: {
        display:'flex',
        bottom:'25%'
      }
  });
 
 export default OrderTracking;
 