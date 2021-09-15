import * as React from 'react';
import { StyleSheet, View, Text, FlatList,Dimensions,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';

const dummyData=[
    {
      "title": 'Order placed',
    },
    {
      "title": 'Order Confirmed',
    },
    {
      "title": 'Driver started',
    },
    {
      "title": 'Van arrived',
    },
    {
      "title": 'Order completed',
    }
  ];

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  separatorFinishedColor: '#9DC44D',
  separatorUnFinishedColor: '#CDCDCD',
  stepIndicatorFinishedColor: '#9DC44D',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#CDCDCD',
  labelColor: '#110508',
  labelSize: 12,
  currentStepLabelColor: '#110508',
};

export default function VerticalStepIndicator() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const renderPage = (rowData) => {
    const item = rowData.item;
    return (
      <View style={styles.rowItem}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const onViewableItemsChanged = React.useCallback(({ viewableItems }) => {
    const visibleItemsCount = viewableItems.length;
    if (visibleItemsCount !== 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index);
    }
  }, []);

  return (
    <View style={styles.container}>
        <Text style={{marginTop:'4%',fontWeight:'500',fontSize:18}}>
            Status
        </Text>
        <View style={styles.stepIndicator}>
            <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={5}
            direction="vertical"
            currentPosition={4}
            labels={dummyData.map((item) => item.title)}
            paddingRight={0}
            />
            <Text style={{borderColor:'#CDCDCD',borderWidth:1,color:'#CDCDCD',marginTop:'auto',marginBottom:'auto',padding:3,fontSize:10,width:75,textAlign:'center'}}>
                TRACK
            </Text>
      </View>
      <View>
            <View style={{alignContent:'center',justifyContent:'center',paddingLeft:'3%',paddingRight:'3%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>Order#1</Text>
                    <Text style={{fontSize:14,fontWeight:"bold",marginLeft:'auto'}}>{'\u20B9'}399</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{marginRight:'auto'}}>
                        <Text style={{fontSize:14,color:'#828282'}}>silver package</Text>
                        <Text style={{fontSize:14,color:'#828282',marginTop:3}}><Text style={{fontWeight:'bold',fontSize:14,color:'black'}}>OTP:</Text> 56789</Text>
                    </View>
                    <View style={{marginLeft:'auto'}}>
                        <Text style={{fontSize:14,color:'#828282',marginLeft:'auto',marginTop:2}}>6 pm, 12 Jan 2021</Text>
                    </View>
                </View>
            </View>
            <View style={{alignContent:'center',justifyContent:'center',paddingLeft:'3%',paddingRight:'3%',marginTop:20}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>Report</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <Text style={{fontSize:14,color:'#828282'}}>Report1.pdf</Text>
                        <Text style={{fontSize:14,color:'#828282',marginLeft:'auto'}}>56789</Text>
                    </View>
                </View>
            </View>
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'>
          <Text style={styles.label}>ORDER DETAILS</Text>
        </TouchableOpacity>
    </View>
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingLeft:20,
    paddingRight:20
  },
  stepIndicator: {
    width:'100%',
    flexDirection:'row',
    height:"60%"
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
});