import React, { Component } from 'react'
import {View,Text,ImageBackground,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Entypo  from 'react-native-vector-icons/Entypo';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, Card, CardItem, Body,  } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import Bottomnav from './Bottomnav';
export default class EditProfileScreen extends Component {
    static navigationOptions={
        header:null
    }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
         <ImageBackground  source={require('./images/destination.jpg')}
                                    style={{height:155,}}
                                    imageStyle={{resizeMode:'stretch'}}>
            <View style={{ flexDirection:'row',justifyContent:'flex-end',marginTop:8,borderColor:'transparent',borderWidth:1}}>
        <Text style={{padding:5,fontSize:10}}>Change cover</Text>
        <Entypo name="plus" size={20} color="blue"  onPress={() => navigate('ProfileScreen')} style={{marginRight:15}} />
        </View>  

<View style={{width:145,height:145,borderRadius:100,borderColor:'white',borderWidth:5,position:"absolute",top:20,left:100}}>
         <Image  source={require('./images/girl.jpeg')} style={{width:"100%",height:'100%',borderRadius:100}}/>    
                    <Text style={{padding:5,marginLeft:5,fontSize:10,top:50,left:20}}>Change picture</Text>
                 <Entypo name="plus" size={20} color="#00D0A7"  onPress={()=>navigate("Profile ")}
                style={{marginLeft:45,top:50}} />
                     
                 
</View>      

          </ImageBackground>
<View>
          <Card style={styles.card}>
     <View style={{flexDirection:'row',}}>
     <View style={{width:100,height:50,borderColor:'transparent',borderWidth:1,padding:10}}>
         <Text   style={{fontSize:10}}>Bella Swan</Text>
         <Text   style={{fontSize:10}}>Sales Executive</Text>
     </View>
                     
                     
     
     
     <View style={{width:100,height:50,borderColor:'transparent',borderWidth:1,flexDirection:'row',marginLeft:95,padding:5}}>
     <Text style={{padding:5,fontSize:10,paddingLeft:5}}>Edit Profile</Text>
 <MaterialIcons name="edit" size={20} color="blue"  onPress={()=>alert("Hello ")} style={{marginLeft:10}} />

     </View>

            
     </View>
      <View >
          <TextInput placeholder ="test@gmail.com                                                                         Email" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="+12456789458                                                                           Mobile" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="11 Avenue,fourth lane court                                                    Address" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="054789                                                                                           ZIP" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="UKM                                                                                              City" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="005                                                                                              Store" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="Fourth Lane                                                                                 Branch" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="English                                                                                     Language" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="I am a sales Executive                                                                  About" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="32''                                                                                              Shirt Size" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          <TextInput placeholder ="Exploring world                                                                   Interest/Hobby" underlineColorAndroid="silver"  style={styles.input}></TextInput>
          </View>




     </Card>
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
        height:500,
        elevation:10,
        borderRadius:30,
         transform:[{translateY:-20}],
        zIndex:-1
     
         },
         //text1:{
  //   fontSize:10,color:'#4C4B4B',padding:3
  // },

  input:
  {
      height:40,
    paddingLeft:6,
    fontSize:10
    
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
LinearGradientStyle:{
  height: 45,
  marginLeft:200,
  marginRight:20,
  transform:[{translateY:-60}],
  
   borderColor:'transparent',
   borderWidth:2
},
LinearGradientStyle2:{
 width:115,height:40,
 //borderRadius:50,
 justifyContent:'center',
 alignItems:'center',
 borderBottomStartRadius:30,
 borderTopStartRadius:30
},
LinearGradientStyle1:{
 width:'100%',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'transparent',borderTopWidth:2
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
}



});