import React, { Component } from 'react'
import {View,Text,ImageBackground,TextInput,Image,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import Entypo  from 'react-native-vector-icons/Entypo';
import Feather  from 'react-native-vector-icons/Feather';
import { Container, Header, Content, Card, CardItem, Body,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Bottomnav from './Bottomnav';
import { LinearGradient } from 'expo-linear-gradient';

const {width,height} =Dimensions.get('window')
export default class GiftScreen extends Component {
    static navigationOptions={
        header:null
    }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1,width:width,height:height}}>
      <ScrollView>
         <ImageBackground  source={require('./images/home.png')}
                                    style={{height:170,}}
                                    imageStyle={{resizeMode:'stretch'}}>
                                    <View style={{marginTop:70,borderColor:'transparent',borderWidth:1,marginLeft:8,width:220,height:100}}>
                                    <Text style={{color:'white',fontWeight:'bold',fontSize:20,paddingLeft:5}}>My Gifts </Text>
                                    </View>
                                    
                    </ImageBackground>

    <View style={{width:'100%',height:430,borderWidth:1,borderColor:'transparent',marginTop:-60}}>
    <ScrollView>
           <Card style={styles.card}>
            <View style={{width:150,height:140,borderWidth:1,borderColor:'transparent'}}>
              <Image source ={require('./images/gift.jpg')} style={{width:150,height:120}} />
            </View>
            <View style={{width:150,height:140,borderWidth:1,borderColor:'transparent',padding:5}}>
              <Text style={{fontSize:15}} >Gifts</Text>
              <Text  style={styles.text}>Date  -  18/08/2020</Text>
              <Text  style={styles.text}>Time  -  7:50 PM</Text>
              <Text  style={styles.text}>Points - 150</Text>
             
             <TouchableOpacity style={{width:80,height:30,backgroundColor:'blue',borderRadius:50,marginTop:5,justifyContent:'center',alignItems:'center',marginLeft:10}}>
             <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#192A56','#2475B0',  ]}
  
       style={styles.LinearGradientStyle}>
            
               <Text style={{color:'white',fontSize:10}}>Approved</Text>
               </LinearGradient>
            
             </TouchableOpacity>
            </View>
            </Card>
           <Card style={styles.card}>
            <View style={{width:150,height:140,borderWidth:1,borderColor:'transparent'}}>
              <Image source ={require('./images/gift2.jpg')} style={{width:150,height:120}}/>
            </View>
            <View style={{width:150,height:140,borderWidth:1,borderColor:'transparent',padding:5}}>
              <Text style={{fontSize:15}}>Gifts</Text>
              <Text  style={styles.text}>Date  -  18/08/2020</Text>
              <Text  style={styles.text}>Time  -  7:50 PM</Text>
              <Text  style={styles.text}>Points - 150</Text>
             
<TouchableOpacity style={{width:80,height:30,backgroundColor:'blue',borderRadius:50,marginTop:8,justifyContent:'center',alignItems:'center',marginLeft:10}}>
<LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#192A56','#2475B0',  ]}
  
       style={styles.LinearGradientStyle}>
            
               <Text style={{color:'white',fontSize:10}}>Approved</Text>
               </LinearGradient>
            
             </TouchableOpacity>
            </View>
            </Card>
           <Card style={styles.card}>
            <View style={{width:150,height:140,borderWidth:1,borderColor:'transparent'}}>
              <Image source ={require('./images/gift3.jpg')} style={{width:150,height:120}}/>
            </View>
            <View style={{width:150,height:140,borderWidth:1,borderColor:'transparent',padding:5}}>
              <Text style={{fontSize:15}}>Gifts</Text>
              <Text   style={styles.text}>Date - 18/08/2020</Text>
              <Text style={styles.text}>Time  -   7:50 PM</Text>
              <Text style={styles.text}>Points -  150</Text>
             
             <TouchableOpacity style={{width:80,height:30,backgroundColor:'blue',borderRadius:50,marginTop:5,justifyContent:'center',alignItems:'center',marginLeft:10}}>
             <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#192A56','#2475B0', ]}
  
       style={styles.LinearGradientStyle}>
            
               <Text style={{color:'white',fontSize:10}}>Approved</Text>
               </LinearGradient>
            
             </TouchableOpacity>
            </View>
            </Card>
</ScrollView>
          
        </View>





        <ImageBackground source={require('./images/logo.png')}

              style={{width:175,height:30,marginLeft:90,opacity:.5}}
              imageStyle={{resizeMode:'stretch'}}>

          </ImageBackground> 

                    </ScrollView>
        
        <View style={{width:'100%',backgroundColor:'transparent',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'white',borderTopWidth:2,marginTop:10}}>
        <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#192A56','#2475B0',  ]}
  
       style={styles.LinearGradientStyle1}>
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/points.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom} onPress={() => navigate('Points')}>Points</Text>      
       </View>
     
        <View style={styles.imgStyle} >
       <Image resizeMode="cover"source={require('./images/peopleicon.png')} style={{width:15,height:15,}} />
       <Text style={styles.textbottom} onPress={() => navigate('Exam')}>People</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/homeicon.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom} onPress={() => navigate('Landing')}>Home</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/gifticon.png')} style={{width:15,height:15,}} />
       <Text style={styles.textbottom} onPress={() => navigate('Gift')}>Gifts</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/incentive.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom} onPress={() => navigate('Incentive')}>Incentive</Text>      
       </View>
     
       </LinearGradient>

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
  
  card:{
        
        padding:5,
        marginLeft:20,
        width:'90%',
        height:135,
        flexDirection:'row',
        elevation:10
  },text:{
    fontSize:10,color:'#4C4B4B',padding:3
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
  },
  LinearGradientStyle1:{
    width:'100%',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'transparent',borderTopWidth:2
  },
  LinearGradientStyle:{
    width:120,height:30,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',marginLeft:20
  },



});