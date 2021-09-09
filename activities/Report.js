
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
   SafeAreaView
 } from 'react-native';
 
 const Report=()=>{
   return(
     <>
        <View style={{display:'flex',width:'100%',height:'100%',paddingLeft:16,paddingRight:16}}>
            <Text style={styles.text}>Reports</Text>
            <Text style={{fontWeight:'bold',marginTop:40,lineHeight:24}}>Upload Reports</Text>
            <Text style={{fontWeight:'bold',marginBottom:5,color:'#828282',fontSize:10}}>Report Should have been taken in last 30days</Text>
            <View style={{marginTop:10}}>
                <View style={{flexDirection:'row',marginBottom:25}}>
                    <Image source={require('../components/drawable/onboarding1.png')} style={{width:40,height:40,marginRight:10}}/>
                    <View>
                        <Text style={{fontWeight:'bold',color:'#4E4E4E',fontSize:10}}>Report Should have been taken in last 30days</Text>
                        <Text style={{fontWeight:'bold',color:'#828282',fontSize:10}}>Report Should have been taken in last 30days</Text>
                    </View>
                    <Image source={require('../components/drawable/onboarding1.png')} style={{width:40,height:40,marginLeft:'auto'}}/>
                </View>
                <View style={{flexDirection:'row',marginBottom:25}}>
                    <Image source={require('../components/drawable/onboarding1.png')} style={{width:40,height:40,marginRight:10}}/>
                    <View>
                        <Text style={{fontWeight:'bold',color:'#4E4E4E',fontSize:10}}>Report Should have been taken in last 30days</Text>
                        <Text style={{fontWeight:'bold',color:'#828282',fontSize:10}}>Report Should have been taken in last 30days</Text>
                    </View>
                    <Image source={require('../components/drawable/onboarding1.png')} style={{width:40,height:40,marginLeft:'auto'}}/>
                </View>
                <View style={{flexDirection:'row',marginBottom:25}}>
                    <Image source={require('../components/drawable/onboarding1.png')} style={{width:40,height:40,marginRight:10}}/>
                    <View>
                        <Text style={{fontWeight:'bold',color:'#4E4E4E',fontSize:10}}>Report Should have been taken in last 30days</Text>
                        <Text style={{fontWeight:'bold',color:'#828282',fontSize:10}}>Report Should have been taken in last 30days</Text>
                    </View>
                    <Image source={require('../components/drawable/onboarding1.png')} style={{width:40,height:40,marginLeft:'auto'}}/>
                </View>
            </View>
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'>
          <Text style={styles.label}>Upload files</Text>
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
         marginTop:25,
        fontSize:24,
        textAlign:'center'
       
     },
  });
 
 export default Report;
 