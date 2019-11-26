import React, { Component } from 'react'
import {View,Text,ImageBackground,TextInput,Image,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import Entypo  from 'react-native-vector-icons/Entypo';
import Feather  from 'react-native-vector-icons/Feather';
import { Container, Header, Content, Card, CardItem, Body,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Bottomnav from './Bottomnav';
import { LinearGradient } from 'expo-linear-gradient';

const {width,height} =Dimensions.get('window')
export default class Setting extends Component {
    static navigationOptions={
        header:null
    }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{width:width,height:height,flex:1}}>
      <ScrollView>
         <ImageBackground  source={require('./images/home.png')}
                                    style={{height:200,}}
                                    imageStyle={{resizeMode:'stretch'}}>
                                    <View style={{marginTop:70,borderColor:'transparent',borderWidth:1,marginLeft:8,width:220,height:100}}>
                                    <Text style={{color:'white',fontWeight:'bold',fontSize:20,paddingTop:5,paddingLeft:5}}>Settings </Text>
                                    </View>
                                    
                    </ImageBackground>

<View style={{width:'100%',height:350,borderWidth:1,borderColor:'transparent'}}>
          <Card style={styles.card}>
            <CardItem style={{width:200,height:40,borderWidth:1,borderColor:'transparent',marginLeft:3}}>
              
                <Text>Change Password</Text>
                <Entypo name="key" size={20} color="blue"  style={{marginLeft:120}}
                   />
              
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={{width:200,height:40,borderWidth:1,borderColor:'transparent',marginLeft:3}}>
              
                <Text>Change Language</Text>
                <Entypo name="language" size={20} color="blue"  style={{marginLeft:120}}
                   />
              
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={{width:200,height:40,borderWidth:1,borderColor:'transparent',marginLeft:3}}>
              
                <Text>Account Settings</Text>
                <Feather name="settings" size={20} color="blue"  style={{marginLeft:120}}
                   />
              
            </CardItem>
          </Card>


</View>

                   
                   <ImageBackground source={require('./images/logo.png')}

                 style={{width:175,height:30,marginLeft:90,opacity:.5,marginBottom:30}}
                 imageStyle={{resizeMode:'stretch'}}>
   
              </ImageBackground> 

 

                    </ScrollView>
    <View style={{width:'100%',backgroundColor:'transparent',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'white',borderTopWidth:2,marginTop:5}}>
    <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#192A56','#2475B0',  ]}
  
       style={styles.LinearGradientStyle1}>
             <View style={styles.imgStyle}>
            <Image resizeMode="cover"source={require('./images/points.png')} style={{width:15,height:15,}}/>
            <Text style={styles.text}onPress={() => navigate('Points')}>Points</Text>      
            </View>
          
             <View style={styles.imgStyle} >
            <Image resizeMode="cover"source={require('./images/peopleicon.png')} style={{width:15,height:15,}} />
            <Text style={styles.text} onPress={() => navigate('EditProfileScreen')}>People</Text>      
            </View>
          
             <View style={styles.imgStyle}>
            <Image resizeMode="cover"source={require('./images/homeicon.png')} style={{width:15,height:15,}}/>
            <Text style={styles.text} onPress={() => navigate('Landing')}>Home</Text>      
            </View>
          
             <View style={styles.imgStyle}>
            <Image resizeMode="cover"source={require('./images/gifticon.png')} style={{width:15,height:15,}} />
            <Text style={styles.text} onPress={() => navigate('Gift')}>Gifts</Text>      
            </View>
          
             <View style={styles.imgStyle}>
            <Image resizeMode="cover"source={require('./images/incentive.png')} style={{width:15,height:15,}}/>
            <Text style={styles.text}onPress={() => navigate('Incentive')}>Incentive</Text>      
            </View>
          
          
            </LinearGradient>  
             {/* <Bottomnav/> */}

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
  card:{
        borderRadius:50,
        padding:5,
        marginLeft:25,
        width:'85%',
        elevation:10,
        flexDirection:'row',
        marginTop:10
  },
  imgStyle:{
    width:60,
    height:50,
    borderColor:'transparent',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:10,color:'white',
    paddingTop:3
  },
  LinearGradientStyle1:{
    width:'100%',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'transparent',borderTopWidth:2
  },


});