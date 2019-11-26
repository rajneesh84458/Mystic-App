import React from 'react';
import {View,Text,StyleSheet,ImageBackground,TextInput,ScrollView,Image} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body,  } from 'native-base';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Bottomnav from './Bottomnav';
import { LinearGradient } from 'expo-linear-gradient';

export default class ProfileScreen extends React.Component{
    static navigationOptions={
        header:null
    }
    render()
   
    {
        const {navigate} = this.props.navigation;
        return(
              <View style={styles.container}>
              <ScrollView>
    <ImageBackground  source={require('./images/destination.jpg')}
                                    style={{height:155,}}
                                    imageStyle={{resizeMode:'stretch'}}>

           <View style={{width:145,height:145,borderRadius:100,borderColor:'white',borderWidth:5,position:"absolute",top:20,left:100}}>
           <Image  source={require('./images/girl.jpeg')} style={{width:"100%",height:'100%',borderRadius:100}}/>
 
</View>      


          </ImageBackground>
          <Card style={styles.card}>
     <View style={{flexDirection:'row',}}>
     <View style={{width:100,height:40,borderColor:'transparent',borderWidth:1,padding:5}}>
         <Text   style={{fontSize:10}}>Bella Swan</Text>
         <Text   style={{fontSize:10}}>Sales Executive</Text>
     </View>
                     
                     
     
     
     <View style={{width:100,height:40,borderColor:'transparent',borderWidth:1,flexDirection:'row',marginLeft:95,padding:5}}>
     <Text style={{padding:5,fontSize:10,paddingLeft:5}}>Edit Profile</Text>
 <MaterialIcons name="edit" size={20} color="blue"  onPress={()=>navigate("EditProfileScreen")} style={{marginLeft:10}} />

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

const styles=StyleSheet.create({
     container:{
                 width:'100%',
                 height:'100%',
                 backgroundColor:'white'
     },
     card:{
        
        padding:5,
        marginLeft:20,
        width:'90%',
        height:500,
        elevation:10,
        borderRadius:30,
         transform:[{translateY:-20}],
        
     },text:{
        fontSize:10,color:'#4C4B4B',padding:3
      },
    
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
      LinearGradientStyle1:{
        width:'100%',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'transparent',borderTopWidth:2
      },
      text:{
        fontSize:10,color:'white',
        paddingTop:3
      }
    
    
    

})