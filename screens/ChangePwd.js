import React, { Component } from 'react'
import {View,Text,ImageBackground,TextInput,Image,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
const {width,height} =Dimensions.get('window')
export default class ChangePwd extends Component {
    static navigationOptions={
        header:null
    }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      
         <ImageBackground  source={require('./images/home.png')}
                                    style={{height:160,}}
                                    imageStyle={{resizeMode:'stretch'}}>
                                    <View style={{marginTop:70,borderColor:'transparent',borderWidth:1,marginLeft:8,width:220,height:100}}>
                                    <Text style={{color:'white',fontWeight:'bold',fontSize:20,paddingTop:10}}>Change Password </Text>
                                    </View>
                                    
                    </ImageBackground>

              <View style={{marginLeft:10,marginTop:10,width:'100%',height:80,borderColor:'transparent',borderWidth:1}}>
                <Text>Do you want to you change your password,</Text>
                <Text>follow the simple steps and click</Text>
               <Text>on the tick !</Text>

              </View>

<ImageBackground  source={require('./images/change.png')}
                                    style={{ width:'90%',height:200,marginTop:15}}
                                    imageStyle={{resizeMode:'stretch'}}>
 <View style={{paddingLeft:15,paddingTop:20,marginTop:10}}>
<TextInput placeholder="Old Password" placeholderTextColor="black" autoCorrect={false} maxLength={15}  style={{color:'black',fontSize:15,alignItems:'center',fontWeight:'bold'}}></TextInput>

<Text style={{marginBottom:10}} numberOfLines={1}>
    ____________________________
  </Text>

  <TextInput placeholder="New Password" secureTextEntry={true} autoCorrect={false} placeholderTextColor="black" maxLength={20} style={{color:'black',fontSize:15,alignItems:'center',fontWeight:'bold'}}></TextInput>
<Text style={{marginBottom:10}} numberOfLines={1}>
    ____________________________
  </Text>
<TextInput placeholder="Re-enter Password" placeholderTextColor="black" maxLength={10} style={{color:'black',fontSize:15,alignItems:'center',fontWeight:'bold'}}></TextInput>

</View>                       
                    </ImageBackground>

                    <Image  source={require('./images/tick.png')}
                                    style={{width:60,height:60,transform: [{'translate':[240,-135,1]}] }}/>
                                    
                                    
                                    
 <View style={{width :'80%',height:50,borderColor:'transparent',borderWidth:1,marginBottom:40}}>
  
  <TouchableOpacity style={{ flexDirection:'row',width:100,height:52,borderWidth:1,borderColor:'transparent',marginLeft:100,bottom:60}}
  onPress={() => navigate('Test')} >
  
<AntDesign name="arrowleft" size={15} color="black" />
<View>
    <Text style={{fontSize:10}} > Back  to Setting</Text> 
            </View>
  
     </TouchableOpacity>
</View>
<View style={{bottom:70,width:'100%',height:30,borderWidth:1,borderColor:'transparent',}}>
                   
                   <ImageBackground source={require('./images/logo.png')}

                 style={{width:175,height:30,marginLeft:90,opacity:.5}}
                 imageStyle={{resizeMode:'stretch'}}>
   
              </ImageBackground> 

  </View> 
 <View style={{width:'100%',backgroundColor:'transparent',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'transparent',borderTopWidth:2,bottom:45}}>
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
    width:width,
    height:height,
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
  textbottom:{
    fontSize:10,color:'white',
    paddingTop:3
  },
text:{
  fontSize:10,color:'white',
  paddingTop:3
},

});