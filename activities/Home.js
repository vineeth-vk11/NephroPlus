
 import React,{Component,useState} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   FlatList,
   SafeAreaView,
   TouchableOpacity
    } from 'react-native';
 import RNBounceable from "react-native-bouncy-checkbox";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import DropDownPicker from 'react-native-dropdown-picker';

const DATA = [
   {
     id: '0',
     title: 'Hemodialysis at Home',
     price:"4500",
     time:"4 hours",
     desc:" Bloodtube and Dialyser Single use"
   },
   {
      id: '1',
      title: 'Hemodialysis at Home',
      price:"4500",
      time:"4 hours",
      desc:" Bloodtube and Dialyser Single use"
   },
   {
      id: '2',
      title: 'Hemodialysis at Home',
      price:"4500",
      time:"4 hours",
      desc:" Bloodtube and Dialyser Single use"
   },
 ];



 class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
}
  renderItem = ({ item }) => (
    <TouchableOpacity style={{height:75,borderColor:'#9DC44D',borderWidth:1,borderRadius:10,marginTop:'2%',width:380,padding:10}}
     onPress={() => console.log(this.props)}>
      <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:14,fontWeight:"bold"}}>{item.title}</Text>
         <Text style={{fontSize:14,fontWeight:"bold",marginLeft:'auto'}}>{'\u20B9'}{item.price}</Text>
      </View>
      <Text style={{fontSize:10,color:'#828282'}}>{item.time}</Text>
      <Text style={{fontSize:10,color:'#828282'}}>{item.desc}</Text>
    </TouchableOpacity>
  );
  render() {
    return(
      <View style={styles.main}>
         <Text style={styles.text}>Services</Text>
             <SafeAreaView  style={styles.list}>
             <FlatList
                data={DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}/>
             </SafeAreaView >
     </View>
    );
  }

 }
 const styles = StyleSheet.create({
    main:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ffffff"
    },
    list:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ffffff",
      top:10,
      width:'100%',
      alignItems:'center'
    },
     text:{
        display:'flex',
        fontSize:24,
        marginBottom:'auto',
        textAlign:'center',
        marginTop:15,
        borderColor:'#828282',
        borderBottomWidth:1,
        paddingBottom:15
      
     }
  });
 
 export default HomePage;
 