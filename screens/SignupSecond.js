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
import TimeLinerTwo from './TimeLinerTwo';
export default class SignupSecond extends Component {
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

      <TimeLinerTwo/>
    </View>
    
   <View style={{width:'100%',height:210,borderWidth:1,borderColor:'transparent',flexDirection:'row',marginTop:30}}>
<View style={{width:270,height:200,borderColor:'transparent',borderWidth:1,marginVertical:5}}>
    <Card style={{marginLeft:0,height:200,width:265,paddingLeft:5,borderBottomEndRadius:50,borderTopEndRadius:50,borderWidth:1,borderColor:'transparent',elevation:10,zIndex:-1}}>
        <CardItem style={{borderColor:'transparent',borderWidth:1,width:240,height:150,marginTop:10,marginRight:5}}>
          <Body  style={{borderWidth:1,borderColor:'transparent',height:160}}>
            <TextInput placeholder="Address" 
            placeholderTextColor="black" 
            maxLength={20}
              autoCorrect={false}
              style={{color:'black',fontSize:15,fontWeight:'bold',width:200}}></TextInput>
            <Text style={{marginBottom:10}} numberOfLines={1}>
                    ____________________________
                  </Text>
             <TextInput placeholder="Zip"  placeholderTextColor="black" secureTextEntry={true} maxLength={10} style={{color:'black',fontSize:15,fontWeight:'bold'}}></TextInput>
             <Text style={{marginBottom:10}} numberOfLines={1}>
                    ____________________________
                  </Text>
                  <View style={{ flexDirection:'row',width:'100%',justifyContent:"space-between",height:20,borderColor:'transparent',borderWidth:1}}>
                  
                  <Picker
                  selectedValue={this.state.language}
                  style={{height: 50, width: 200}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
  <Picker.Item label="State" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
                </View>
                 
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
            
      <AntDesign name="arrowright" size={25} color="white"  onPress={() => navigate('SignUp3')}/>
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
   <View style={{flexDirection:'row'}}>
  <AntDesign name="arrowleft" size={20} color="white" style={{paddingTop:25,marginLeft:10}}/>
  <Text style={{paddingTop:25,color:'white',paddingLeft:2}}  onPress={() => navigate('Route')}  >Back to Login</Text>
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
    alignItems:'center'
  },
})