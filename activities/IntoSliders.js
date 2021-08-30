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
      />
  }
}
// import React from 'react';
// import { StyleSheet,View,Text,Image,Dimensions } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider'; 
// export default class IntoSlider extends React.Component {
//   state = {
//     showRealApp: false
//   }
//   slides = [
//     {
//       key: 'one',
//       title: 'Title 1',
//       text: 'Description.\nSay something cool',
//       image: require('../components/drawable/onboarding1.png'),
//       backgroundColor: 'red',
//     },
//     {
//       key:'two',
//       title: 'Title 2',
//       text: 'Other cool stuff',
//       image: require('../components/drawable/onboarding1.png'),
//       backgroundColor: 'red',
//     },
//     {
//       key: 'three',
//       title: 'Rocket guy',
//       text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
//       image: require('../components/drawable/onboarding1.png'),
//       backgroundColor: 'red',
//     }
//   ];
//   _renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.title}>{item.text}</Text>
//         {/* <Image style={styles.image} source={require('../components/drawable/onboarding1.png')} /> */}
//         <Text style={styles.text}>item.text</Text>
//       </View>
//     );
//   }
//   _renderNextButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         <Text>NEXT</Text>
//       </View>
//     );
//   };
//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({ showRealApp: true });
//   }
//   render() {
//     if (this.state.showRealApp) {
//       return <Text>hiiiiiiiii</Text>;
//     } else {
//       return <AppIntroSlider renderItem={this._renderItem} 
//                               data={this.slides} onDone={this._onDone} 
//                               showNextButton={true} 
//                               renderNextButton={this._renderNextButton}
//                               bottomButton={true}/>;
//     }
//   }
// }
// const styles = StyleSheet.create({
//   buttonCircle: {
//     width: Dimensions.get('window').width,
//     height: 40,
//     backgroundColor: 'red',
//   },
//   slide:{
//     width:Dimensions.get('window').width,
//     height:Dimensions.get('window').height,
//     backgroundColor:'red',
//     color:"red"
//   },
//   image:{
//     width:50,
//     height:50
//   },
//   title:{
//     color:'red'
//   },
//   text:{
//   },
// });


