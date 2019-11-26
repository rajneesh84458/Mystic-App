import React, { Component } from 'react'
import { Text, View, TouchableHighlight,ImageBackground } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Divider, } from 'react-native-paper';
export default class CustomSideBar extends Component {
    
  render() {
      
    return (
        <View style={{flex:1,}}>
      <ImageBackground  source={require('./images/header.png')}
                                    style={{height:170,}}
                                    imageStyle={{resizeMode:'stretch'}}>
                                    <View style={{flexDirection:'row',marginTop:30}}>
                                     <AntDesign name="arrowleft" size={15} color="white"  style={{marginLeft:5}}/>
                                     <Text style={{color:'white',fontSize:10,marginLeft:10}}>Back</Text>
                                     </View>

                    </ImageBackground>

      <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between',borderWidth:1,borderColor:'transparent',bottom:10}}>
                   
                    <Text style={{color:'grey',fontSize:18,marginLeft:10}}>Exam History</Text>
                    <Ionicons name="ios-arrow-forward" size={20} color="grey" onPress ={()=>alert('History')}style={{marginRight:15}} />
                  
                   </View>
                   <Divider style={{width:'90%',marginLeft:10}} />
      <View style={{flexDirection:'row',marginTop:15,justifyContent:'space-between',borderWidth:1,borderColor:'transparent',bottom:10}}>
                    <Text style={{color:'grey',fontSize:18,marginLeft:10}}>Settings</Text>
                    <Ionicons name="ios-arrow-forward" size={20} color="grey" style={{marginRight:15}}/>
                   </View>
                   <Divider style={{width:'90%',marginLeft:10}} />
      <View style={{flexDirection:'row',marginTop:15,justifyContent:'space-between',borderWidth:1,borderColor:'transparent'}}>
                    <Text style={{color:'grey',fontSize:18,marginLeft:10}}>Log out</Text>
                    <Ionicons name="ios-arrow-forward" size={20} color="grey" style={{marginRight:15}} />
                   </View>
                   
      </View>
    )
  }
}
