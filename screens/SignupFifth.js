import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,ImageBackground,Image,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Dimensions,Picker
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Card, CardItem, Body,Button,Header, Content, Icon,  Form } from 'native-base'

const {width,height} =Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';
import TimeLinerFive from './TimeLinerFive';
export default class SignupFourth extends Component {
  static navigationOptions={
    header:null
}
  state={
    language:''
}
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1,width:width,height:height}}>
      <View>
        <ImageBackground  source={require('./images/header.png')}
                                    style={{width:'100%',height:200}}
                                    imageStyle={{resizeMode:'stretch'}}>
             <TouchableHighlight onPress={()=>alert('hello')}>
           <Image  source={require('./images/imgupload.png')}
                                    style={{width:100,height:100,marginLeft:240,marginTop:70 }} />
                          </TouchableHighlight>

                        </ImageBackground>
        <Text style={{fontSize:30,fontWeight:'bold',marginLeft:10}}>Register</Text>
        <Text style={{fontSize:10,marginLeft:10}}>Kindly provide required information & follow the steps!</Text>

        <TimeLinerFive/>
    </View>
    
   <View style={{width:'100%',height:210,borderWidth:1,borderColor:'transparent',flexDirection:'row',marginTop:30}}>
<View style={{width:270,height:150,borderColor:'transparent',borderWidth:1,marginVertical:5}}>
    <Card style={{marginLeft:0,height:150,width:255,paddingLeft:5,borderBottomEndRadius:80,borderTopEndRadius:80,borderWidth:1,borderColor:'transparent',elevation:10,zIndex:-1}}>
        <CardItem style={{borderColor:'transparent',borderWidth:1,width:215,height:100,marginTop:10,marginRight:5}}>
          <Body  style={{borderWidth:1,borderColor:'transparent',height:100}}>
            <TextInput placeholder="Password" 
            placeholderTextColor="black" 
            maxLength={20}
              autoCorrect={false}
              style={{color:'black',fontSize:15,fontWeight:'bold',width:200,marginLeft:3}}></TextInput>
            <Text style={{marginBottom:10}} numberOfLines={1}>
                    ________________________
                  </Text>
                  <TextInput placeholder="Confirm Password" 
            placeholderTextColor="black" 
            maxLength={20}
              autoCorrect={false}
              style={{color:'black',fontSize:15,fontWeight:'bold',width:200,marginLeft:3}}></TextInput>

             </Body>
             
            </CardItem>
           
                                  
          </Card>
          </View>
    <View style={{width:100,height:150,borderWidth:1,borderColor:'transparent',marginTop:20,marginLeft:-40,justifyContent:'center', }}>
    <View style={{borderRadius:100,height:60,width:60,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
    <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#30336B','#3498DB',  ]}
  
       style={styles.LinearGradientStyle}>
            
      <AntDesign name="check" size={25} color="white"  onPress={() => navigate("Test")}/>
      </LinearGradient>
      </View>
            
          </View>
    </View>
              
          <ImageBackground source={require('./images/footer.png')}
                         style={{width:'100%',height:200,justifyContent:'flex-end'}}
                        imageStyle={{resizeMode:'stretch'}}>
                        <View style={{width:300,height:100,borderColor:'transparent',borderWidth:1,marginTop:-20}}>
                        
                        <ImageBackground  source={require('./images/button.png')}
                        style={{width: '75%',height:90,marginTop:-40}}
                        imageStyle={{resizeMode:'stretch'}}
                         >
   <View style={{flexDirection:'row',}}>
  <AntDesign name="arrowleft" size={20} color="white" style={{paddingTop:28,marginLeft:10}}/>
  <Text style={{paddingTop:28,color:'white',paddingLeft:2}}  onPress={() => navigate('Route')}  >Back to Login</Text>
  </View>
      </ImageBackground>
     
      
                        </View>   
                        </ImageBackground>
     

      

      </View>
    )
  }
}

const styles=StyleSheet.create({
  LinearGradientStyle:{
    width:60,height:60,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',marginTop:-8
  },
})