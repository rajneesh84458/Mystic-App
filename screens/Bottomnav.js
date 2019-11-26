import React, { Component } from 'react'
import {View,Text,ImageBackground,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native'
export default class Bottomnav extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={{width:'100%',backgroundColor:'blue',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'white',borderTopWidth:2,marginTop:10}}>
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/points.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom} onPress={() => navigate('Points')}>Points</Text>      
       </View>
     
        <View style={styles.imgStyle} >
       <Image resizeMode="cover"source={require('./images/peopleicon.png')} style={{width:15,height:15,}} />
       <Text style={styles.textbottom} onPress={() => navigate('EditProfileScreen')}>People</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/homeicon.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom}onPress={() => navigate('Landing')}>Home</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/gifticon.png')} style={{width:15,height:15,}} />
       <Text style={styles.textbottom} onPress={() => navigate('Gift')}>Gifts</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/incentive.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom} onPress={() => navigate('Incentive')}>Incentive</Text>      
       </View>
     
       

 </View>




    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      height:'100%',
      backgroundColor: '#fff',
    },
    gradient:{
      padding: 15,
       borderRadius: 5 ,
       width:150,
       borderTopRightRadius:25,
       borderBottomRightRadius:25,
       marginLeft:0,
       paddingLeft:0
    },
    imgStyle:{
      width:60,
      height:50,
      borderColor:'transparent',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center'
    },
    textbottom:{
      fontSize:10,color:'white',
      paddingTop:3
    }
  
  
  });