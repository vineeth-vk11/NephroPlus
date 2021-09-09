
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
import SlotTimeList from './SlotTimeList.js';
// import BookCallDateTime from './BookCallDateTime.js';
const SlotBooking=()=>{
   return(
     <>
        <Text style={styles.text}>Slots</Text>
        <View style={{display:'flex',width:'100%',height:'100%',paddingLeft:'4%'}}>
            <View style={{height:75,borderColor:'#9DC44D',borderWidth:1,borderRadius:10,marginTop:'5%',width:370,padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Hemodialysis at Home</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginLeft:'auto'}}>{'\u20B9'}4500</Text>
                </View>
                <Text style={{fontSize:10,color:'#828282'}}>4 hours</Text>
                <Text style={{fontSize:10,color:'#828282'}}>Bloodtube and Dialyser Single use</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'bold',marginTop:30,marginBottom:5,lineHeight:24,marginRight:'auto'}}>Select Slot</Text>
              {/* <BookCallDateTime/> */}
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'bold',marginTop:30,marginBottom:5,lineHeight:24,marginRight:'auto'}}>Select Slot</Text>
              <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
                <View style={{width:15,height:15,backgroundColor:'#9DC44D',fontWeight:'bold',marginRight:'3%',borderRadius:10,marginBottom:5}}/>
                <Text style={{fontWeight:'bold',marginBottom:5,marginRight:'5%'}}>Available</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:30,alignItems:'center'}}>
                <View style={{width:15,height:15,backgroundColor:'#cdcdcd',fontWeight:'bold',marginRight:'3%',borderRadius:10,marginBottom:5}}/>
                <Text style={{fontWeight:'bold',marginBottom:5,marginRight:'5%'}}>Unavailable</Text>
              </View>
            </View>
            <SlotTimeList/>
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
 
 export default SlotBooking;
 