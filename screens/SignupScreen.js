import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,ImageBackground,Image,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Dimensions
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, CardItem, Body,Button } from 'native-base'

import TimeLinerOne from './TimeLinerScreen';
const {width,height} =Dimensions.get('window')
export default class SignUpScreen extends Component {
  static navigationOptions={
    header:null
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

       <TimeLinerOne/>
    </View>
    
   <View style={{width:'100%',height:210,borderWidth:1,borderColor:'transparent',flexDirection:'row',marginTop:30}}>
<View style={{width:270,height:200,borderColor:'transparent',borderWidth:1,marginVertical:5}}>
    <Card style={{marginLeft:0,height:200,width:265,paddingLeft:5,borderBottomEndRadius:50,borderTopEndRadius:50,borderWidth:1,borderColor:'transparent',elevation:10,zIndex:-1}}>
        <CardItem style={{borderColor:'transparent',borderWidth:1,width:240,height:150,marginTop:10,marginRight:5}}>
          <Body  style={{borderWidth:1,borderColor:'transparent',height:160}}>
            <TextInput placeholder="Username" 
            placeholderTextColor="black" 
            maxLength={20}
              autoCorrect={false}
              style={{color:'black',fontSize:15,fontWeight:'bold',width:200}}></TextInput>
            <Text style={{marginBottom:10}} numberOfLines={1}>
                    ____________________________
                  </Text>
             <TextInput placeholder="Password"  placeholderTextColor="black" secureTextEntry={true} maxLength={10} style={{color:'black',fontSize:15,fontWeight:'bold'}}></TextInput>
             <Text style={{marginBottom:10}} numberOfLines={1}>
                    ____________________________
                  </Text>
                  <TextInput placeholder="Mobile Number" autoCorrect={false} placeholderTextColor="black" maxLength={11} style={{color:'black',fontSize:15,fontWeight:'bold',width:200}}></TextInput>
            
             </Body>
            </CardItem>
           
                                  
          </Card>
          </View>
    <View style={{width:100,height:150,borderWidth:1,borderColor:'transparent',marginTop:20,marginLeft:-40,justifyContent:'center', }}>
    <View style={{borderRadius:100,height:60,width:60,backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
    <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#30336B','#3498DB',  ]}
  
       style={styles.LinearGradientStyle}>
            
      <AntDesign name="arrowright" size={25} color="white"  onPress={() => navigate('SignUp2')}/>
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
  <Text style={{margin:0,paddingTop:28,paddingLeft:10,color:'white'}}  onPress={() => navigate('Route')}  >Back to Login</Text>
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
    alignItems:'center'
  },
})