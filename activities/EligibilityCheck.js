
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
 
 const EligibilityCheck=({navigation})=>{
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
   return(
     <View style={{ backgroundColor:'white',height:'100%'}}>
        <Text style={styles.text}>Eligibility Check</Text>
        <View style={styles.main}>
            <View style={{flexDirection:'column',marginLeft:'5%'}}>
              <Text  style={styles.subtext}>Are you positive for any of these viruses?</Text>
              <RadioGroup
                size={20}
                thickness={2}
                selectedIndex={1}
                color='black'
                >
                <RadioButton value='index1' style={{paddingTop:0,paddingLeft:0}}>
                  <Text>Less than 30 days</Text>
                </RadioButton>
                <RadioButton value='index3' style={{paddingTop:0,paddingLeft:0}}>
                  <Text>Greater than 30 days</Text>
                </RadioButton>
              </RadioGroup>
            </View>  

            <View style={{flexDirection:'column',marginLeft:'5%'}}>
              <Text  style={styles.subtext}>Are you positive for any of these viruses?</Text>
              <RNBounceable
                size={25}
                fillColor="#9DC44D"
                unfillColor="#FFFFFF"
                text="Hepatisis A"
                isChecked={true}
                iconStyle={{ borderColor: "#9DC44D" }}
                textStyle={{ fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15}}
              />
              <RNBounceable
                size={25}
                fillColor="#9DC44D"
                unfillColor="#FFFFFF"
                text="Hepatisis B"
                iconStyle={{ borderColor: "#000" }}
                textStyle={{ fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15}}
                style={{marginTop:5}}
              />
              <RNBounceable
                size={25}
                fillColor="#9DC44D"
                unfillColor="#FFFFFF"
                text="Hepatisis C"
                iconStyle={{ borderColor: "#000" }}
                textStyle={{ fontFamily: "JosefinSans-Regular",textDecorationLine:'none',color:'black',fontSize:15}}
                style={{marginTop:5}}/>
            </View> 
            <View style={{flexDirection:'column',marginLeft:'5%'}}>
              <Text  style={styles.subtext}>Stay type</Text>
              <RadioGroup
                size={20}
                thickness={2}
                selectedIndex={1}
                color='black'
                >
                <RadioButton value='index1' style={{paddingTop:0,paddingLeft:0}}>
                  <Text>Apartment</Text>
                </RadioButton>
                <RadioButton value='index3' style={{paddingTop:0,paddingLeft:0}}>
                  <Text>Individual house</Text>
                </RadioButton>
              </RadioGroup>
            </View> 
            <View style={{flexDirection:'column',marginLeft:'5%'}}>
              <Text  style={styles.subtext}>Lift access</Text>
              <RadioGroup
                size={20}
                thickness={2}
                selectedIndex={1}
                color='black'
                >
                <RadioButton value='index1' style={{paddingTop:0,paddingLeft:0}}>
                  <Text>Yes</Text>
                </RadioButton>
                <RadioButton value='index3' style={{paddingTop:0,paddingLeft:0}}>
                  <Text>No</Text>
                </RadioButton>
              </RadioGroup>
            </View>
            <View style={{flexDirection:'column',marginLeft:'5%',marginRight:'5%'}}>
              <Text  style={styles.subtext}>Does room where dialysis is being planned have an attached bathroom?</Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <View style={{flexDirection:'column',marginLeft:'5%', backgroundColor:'white'}}>
              <Text  style={styles.subtext}>Does room where dialysis is being planned have an attached bathroom?</Text>
              <RadioGroup
                size={20}
                thickness={2}
                selectedIndex={1}
                color='black'
                >
                <RadioButton value='index1' style={{paddingTop:0,paddingLeft:0}}>
                  <Text>Yes</Text>
                </RadioButton>
                <RadioButton value='index3' style={{paddingTop:0,paddingLeft:0}}>
                  <Text>No</Text>
                </RadioButton>
              </RadioGroup>
            </View>
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'
          onPress={()=>{navigation.navigate('EligibilityResult')}}>
          <Text style={styles.label}>NEXT</Text>
        </TouchableOpacity>
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
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 0,
      width:Dimensions.get('window').width,
      backgroundColor:'white'
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
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      display:'flex',
    },
    tinyLogo: {
        display:'flex',
        bottom:'25%'
      }
  });
 
 export default EligibilityCheck;
 