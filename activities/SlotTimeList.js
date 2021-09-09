import React from "react";
import { FlatList,Text,TouchableOpacity,StyleSheet,View} from "react-native";

class SlotTimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressStatus:false,
      selectedItem:0
    };
  }
  DATA = [
    {
      id: '0',
      desc:"10:00 am",
      available:true
    },
    {
       id: '1',
       desc:"11:00 am",
       available:false
    },
    {
       id: '2',
       desc:"12:00 am",
       available:true
    },
    {
        id: '0',
        desc:"10:00 am",
        available:false
      },
      {
         id: '1',
         desc:"11:00 am",
         available:false
      },
      {
         id: '2',
         desc:"12:00 am",
         available:true
      },
      {
        id: '0',
        desc:"10:00 am",
        available:false
      },
      {
         id: '1',
         desc:"11:00 am",
         available:true
      },
      {
         id: '2',
         desc:"12:00 am",
         available:true
      },
  ];

onPressList = (data, index) => {
  this.setState({ pressStatus : true, selectedItem: index});
}
  render() {
    return (<>
        <FlatList
            data={this.DATA}
            keyExtractor={(item, index) => String(index)}
            extraData={this.state.selectedItem}
            numColumns={3}
            style={{marginRight:'auto',width:'100%'}}
            renderItem={({item:data, index})  => {
                const sd = this.state.selectedItem
                const containerColor ={ marginRight:'auto',marginBottom:'2%',width:'30%'}
                const availableColor={color: sd === index ? "#fff" : "#868686",
                                fontSize:16,textAlign:'center',
                                backgroundColor: sd === index ? "#9DC44D" : "white",
                                borderColor: sd === index ? "#9DC44D" : "#9DC44D",
                                borderWidth:1,
                                padding:10,
                                borderRadius:5,
                                display:'flex',
                                justifyContent:'space-between'}
                const unavailableColor={color:"#868686",
                                fontSize:16,textAlign:'center',
                                backgroundColor:"#cdcdcd",
                                padding:10,
                                borderRadius:5,
                                display:'flex',
                                justifyContent:'space-between'}
              return (
                  <>
                {data.available?<TouchableOpacity 
                                    style={containerColor}
                                    onPress={() => this.onPressList(data, index)}>
                                    <View >
                                        <Text style={availableColor} >{data.desc}</Text>
                                    </View>
                                </TouchableOpacity >
                                :<TouchableOpacity 
                                    style={containerColor}
                                    onPress={() => console.log("slot not available")}>
                                    <View >
                                        <Text style={unavailableColor} >{data.desc}</Text>
                                    </View>
                                </TouchableOpacity>}
                </>
              )                   
            }}/>
      </>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e5e5e5"
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    GridViewContainer: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     height: 100,
     margin: 5,
     backgroundColor: '#7B1FA2'
  },
  GridViewTextLayout: {
     fontSize: 20,
     fontWeight: 'bold',
     justifyContent: 'center',
     color: '#fff',
     padding: 10,
   }
  });
  
export default SlotTimeList;