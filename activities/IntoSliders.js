import React from 'react';
import { StyleSheet,Image ,Button} from 'react-native';
import App from '../App';
import Onboarding from 'react-native-onboarding-swiper';
 
const slides = [
  {
    image: <Image source={require('../components/drawable/onboarding1.png')} style={{width:250,display:'flex',alignItems:'center',justifyContent:'center'}}/>,
    title:'Dialysis on call service in Delhi, Pune, Goa, Hyderabad, Chennai',
  }
  ,
  {
   image: <Image source={require('../components/drawable/onboarding1.png')}  style={{width:250,display:'flex',alignItems:'center',justifyContent:'center'}}/>,
    title:'Book for Dialysis at your finger tips',
  },
  {
    image: <Image source={require('../components/drawable/onboarding1.png')}  style={{width:250,display:'flex',alignItems:'center',justifyContent:'center'}}/>,
    title:'Book for specialised vehicle with dialysis machine, consumables, RO water tank, and an expert technician.',
  }
];
 
export default class IntoSlider extends React.Component {
  render() {
      return <Onboarding pages={slides} showSkip={false} bottomBarColor="#9DC44D" flatlistProps={this._renderItem} renderItem={this._renderItem}
      imageContainerStyles={{display:'flex',paddingBottom:10,width:'100%'}} 
      containerStyles={{display:'flex',marginLeft:'auto',marginRight:'auto',width:500}}
      titleStyles={{display:'flex',marginLeft:'auto',marginRight:'auto',width:300,fontSize:15,textAlign:'center',color:'black'}}
      onDone={()=>this.props.navigation.push('MobileInput')}
      />
  }
}


