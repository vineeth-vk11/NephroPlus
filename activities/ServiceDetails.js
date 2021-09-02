
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
 import { SliderBox } from "react-native-image-slider-box";

 const DATA = [
  {
    id: '0',
    desc:" Bloodtube and Dialyser Single use"
  },
  {
     id: '1',
     desc:" Bloodtube and Dialyser Single use"
  },
  {
     id: '2',
     desc:" Bloodtube and Dialyser Single use"
  },
];

const renderItem = ({ item }) => (
  <Text style={{fontSize:10,color:'#828282',marginBottom:5}}>{'\u2022'}{item.desc}</Text>
);
const images= [
  require('../components/drawable/image1.png'),
  require('../components/drawable/image1.png'),          
  require('../components/drawable/image1.png'),
]
 
 const ServiceDetails=()=>{
   return(
     <>
        <View style={{display:'flex',width:'100%',height:'100%',paddingLeft:16,paddingRight:16}}>
            <Text style={styles.text}>Services</Text>
            <Text style={{fontWeight:'bold',marginTop:40,marginBottom:5,lineHeight:24}}>Haemodialysis at Home</Text>
            <View style={{marginBottom:30}}>
              <SliderBox
                images={images}
                dotColor="#9DC44D"
                inactiveDotColor="#ffffff"
                autoplay
                circleLoop
                paginationBoxStyle={{
                  position: "absolute",
                  bottom:-30,
                  
                }}
                dotStyle={{
                  borderColor:"#828282",
                  borderWidth:1,
                  height:10,
                  width:10,
                  borderRadius:5
                }}
                ImageComponentStyle={{ width: '100%',marginRight:'16%',marginTop: 5}}/>
              </View>
            {/* <Image source={require('../components/drawable/image1.png')} style={{width:'100%'}}/> */}
            <View style={{borderColor:'#EF5DA8',borderWidth:1,borderRadius:10,marginTop:'2%',width:'100%',padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:14,fontWeight:"bold"}}>Platinum Package</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginLeft:'auto'}}>{'\u20B9'}4500</Text>
                </View>
                <Text style={{fontSize:10,color:'#828282',marginTop:10}}>Regular HomeHemodialysis</Text>
                <SafeAreaView  style={{marginTop:15}}>
                  <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}/>
                </SafeAreaView >
            </View>
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'>
          <Text style={styles.label}>FIND SLOTS</Text>
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
 
 export default ServiceDetails;
 