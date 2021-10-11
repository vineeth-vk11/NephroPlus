
 import React,{Component} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
   TextInput,
   TouchableOpacity,
   FlatList,
   SafeAreaView,
   Button
 } from 'react-native';
 import RNBounceable from "react-native-bouncy-checkbox";
const CheckOut=()=>{
   return(
     <>
        <View style={{display:'flex',width:'100%',height:'100%',paddingLeft:'4%'}}>
            <View style={{height:75,borderColor:'#9DC44D',borderWidth:1,borderRadius:10,marginTop:'5%',width:370,padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Hemodialysis at Home</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginLeft:'auto'}}>{'\u20B9'}4500</Text>
                </View>
                <Text style={{fontSize:10,color:'#828282'}}>4 hours</Text>
                <Text style={{fontSize:10,color:'#828282'}}>Bloodtube and Dialyser Single use</Text>
            </View>
            <View style={{marginTop:20,padding:10,paddingRight:20}}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Add Ons</Text>
                <View style={{flexDirection:'row',marginTop:8}}>
                    <RNBounceable
                        size={18}
                        fillColor="#9DC44D"
                        unfillColor="#FFFFFF"
                        text="Injection Wepox 2k"
                        isChecked={true}
                        iconStyle={{ borderColor: "#9DC44D" }}
                        textStyle={{ fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15}}/>
                    <Text style={{fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15,marginLeft:'auto'}}>{'\u20B9'}400</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:8}}>
                    <RNBounceable
                        size={18}
                        fillColor="#9DC44D"
                        unfillColor="#FFFFFF"
                        text="Injection Wepox 2k"
                        isChecked={true}
                        iconStyle={{ borderColor: "#9DC44D" }}
                        textStyle={{ fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15}}/>
                    <Text style={{fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15,marginLeft:'auto'}}>{'\u20B9'}400</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:8}}>
                    <RNBounceable
                        size={18}
                        fillColor="#9DC44D"
                        unfillColor="#FFFFFF"
                        text="Injection Wepox 2k"
                        isChecked={true}
                        iconStyle={{ borderColor: "#9DC44D" }}
                        textStyle={{ fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15}}/>
                    <Text style={{fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15,marginLeft:'auto'}}>{'\u20B9'}400</Text>
                </View>
                

            </View>
            <View style={{marginTop:20,paddingRight:20}}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Address</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:10,color:'#828282',fontSize:12}}>762-JVN - issued in Minnesota (MN) in year 2012</Text>
                    <Image source={require('../components/drawable/onboarding1.png')} style={{width:40,height:40,marginLeft:'auto'}}/>
                    
                </View>


            </View>
            <View style={{marginTop:20,paddingRight:20}}>
                <Text style={{fontSize:16,fontWeight:"bold",marginBottom:8}}>Hemodialysis at Home</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:10,color:'#828282',fontSize:12}}>Item 1</Text>
                    <Text style={{fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'#828282',fontSize:15,marginLeft:'auto'}}>{'\u20B9'}400</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:10,color:'#828282',fontSize:12}}>Item 1</Text>
                    <Text style={{fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'#828282',fontSize:15,marginLeft:'auto'}}>{'\u20B9'}400</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,paddingRight:20}}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Total paid</Text>
                <Text style={{fontSize:16,fontWeight:"bold",marginLeft:'auto'}}>{'\u20B9'}4500</Text>
             </View>
            
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'>
          <Text style={styles.label}>BOOK SLOT</Text>
        </TouchableOpacity>
    </>
   );
 }
 const styles = StyleSheet.create({
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
         marginTop:50,
        fontSize:24,
        textAlign:'center'
     },

  });
 
 export default CheckOut;
 