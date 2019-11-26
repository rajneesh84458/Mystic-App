import React, { Component } from 'react'
import {View,Text,ImageBackground,TextInput,Image,TouchableOpacity,StyleSheet,ProgressBarAndroid,ScrollView,Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Container, Header, Content, Icon, Picker, Form,Card,CardItem, ProgressBar } from "native-base";

const { width, height } = Dimensions.get('window');
export default class LandingPageScreen extends Component {
    static navigationOptions={
        header:null
    }
    state = {
      selected: undefined
    }
    onValueChange(value) {
      this.setState({
        selected: value
      });
    }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
         <ImageBackground  
                                    source={require('./images/home.png')}
                                    style={{height:130,borderWidth:1,borderColor:'transparent'}}
                                    imageStyle={{resizeMode:'stretch'}}>
                                    <Image source={require('./images/bell.png')} style={{marginLeft:300,width:15,height:15,marginTop:10}}/>
                                    <View style={{marginTop:70,borderColor:'transparent',borderWidth:1,marginLeft:8,width:100,height:100,flexDirection:'row',justifyContent:'space-between',marginTop:-5}}>
                                    <Image source={require('./images/menuicon.png')} style={{width:25,height:25,}}/>
                                    <Text style={{color:'white'}}>Home</Text>
                                    </View>

    <View style={{marginLeft:160,borderColor:'transparent',borderWidth:1}}>
<Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Bella Swan</Text>
<Text style={{fontSize:10}}>Sales Executive</Text>
<Text style={{fontSize:8}}>Panafoto,Panama</Text>
</View> 
    </ImageBackground>

  <View style={{width:'100%',height:150,borderColor:'transparent',borderWidth:1,flexDirection:'row',marginTop:-5}}>
<View style={{width:150,height:125,flexDirection:'row',borderColor:'transparent',borderWidth:1,marginTop:5}}>
<ImageBackground source={require('./images/pointhistory.png')} style={{alignItems:"flex-end",width:70,height:70,}}>
   
</ImageBackground>
  
<ImageBackground source={require('./images/pointhold.png')} style={{alignItems:"flex-end",width:45,height:42,marginTop:30}}>

</ImageBackground>



<View  style={{width:170,height:110,borderColor:'transparent',borderWidth:1,marginTop:-100,}}>
<View style={{width:120,height:120,borderRadius:100,borderColor:'#99AAAB',borderWidth:5,position:"absolute",marginLeft:120,}}>

<Image  source={require('./images/girl.jpeg')} style={{width:"100%",height:'100%',borderRadius:100}}/>
<ImageBackground source={require('./images/pointcircle.png')} style={{width:90,height:90,marginTop:-20,marginRight:10}}>
</ImageBackground>

</View>      


</View>
 

</View>
</View>
<View style={{width:'100%',height:120,borderColor:'transparent',borderWidth:3,marginTop:-65}}>
           <Card style={styles.card1}>
            <CardItem style={{paddingTop:2,width:170,height:4,borderWidth:1,borderColor:'transparent',}}>
          <Text>Learning</Text>
                </CardItem>
          </Card>
           <Card style={styles.card2}>
            <CardItem style={{paddingTop:2,marginBottom:5,width:200,height:4,borderWidth:1,borderColor:'transparent',}}>
            <Text>Certificate</Text>
            </CardItem>
          </Card>
           <Card style={styles.card3}>
            <CardItem style={{paddingTop:2,margin:0,padding:0,width:200,height:4,borderWidth:1,borderColor:'transparent',}}>
            <Text>Expert</Text>
            {/* <ProgressBar/> */}
            </CardItem>
          </Card>
           </View> 
<View style={{margin:0,width:'100%',height:50,borderWidth:1,borderColor:'transparent',marginTop:-20}}>
<Card style={{flexDirection:'row',width:'100%',height:50,borderColor:'transparent'}} >
        <AntDesign name="star" size={20} color="#F3B63A" style={{padding:10}} />
        {/* <Text style={{paddingTop:8}}>Mystic spanish course</Text> */}

            <Picker style={{borderColor:'red',borderWidth:1}}
              mode="dropdown"
              
              iosIcon={<Icon name="arrow-down" />}

              textStyle={{ color: "#5cb85c" ,fontSize:10}}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                // paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2',fontSize:10 }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Mystic spanish course" value="key0"  style={{fontSize:10}}/>
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
            </Card>
            <Card style={{width:'100%',height:50,marginTop:-5}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:10,marginLeft:5}}>Total Lessons Completed :1</Text>
            <Text style={{fontSize:10,marginLeft:180}}> 2 of 5</Text>
            </View>


            <CardItem style={styles.card4}>
            {/* <ProgressBar/> */}
            </CardItem>
            </Card>
<View>
<Text style={{fontWeight:'bold',marginLeft:10,fontSize:10}}>COURSES</Text>
</View>

            
 </View>   

 <Card   style={styles.card}>
            <View style={{width:80,height:80,borderWidth:1,borderColor:'transparent',marginTop:-5}}>
              <Image source ={require('./images/gift.jpg')} style={{width:100,height:80}} />
            </View>

            <View style={{width:245,height:90,borderWidth:1,borderColor:'transparent',marginTop:-10}}>
            
             
             <Card  transparent style={{flexDirection:'row',width:'100%',height:40 ,elevation:0,marginTop:-5}} >

            <Picker 
              mode="dropdown"
             
              iosIcon={<Icon name="arrow-down" />}
             
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                // paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined, }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Mystic American course" value="key0" style={{fontSize:10}} />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>

          
            </Card>
            <Text style={{fontSize:10,marginTop:-8,marginLeft:8}}>Lorem Ipsum</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>

             <TouchableOpacity style={{width:120,height:30,backgroundColor:'blue',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
             <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#192A56','#2475B0',  ]}
  
                style={styles.LinearGradientStyle}>
            
               <Text style={{color:'white',fontSize:10}}>View Result</Text>
               </LinearGradient>
             </TouchableOpacity>

             <TouchableOpacity style={{width:120,height:30,backgroundColor:'blue',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
             <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={[ '#192A56','#2475B0',  ]}
  
       style={styles.LinearGradientStyle}>
            
               <Text style={{color:'white',fontSize:10}}>View points & rewards</Text>
               </LinearGradient>
             </TouchableOpacity>

             </View>
            </View>
      </Card>
      <TouchableOpacity activeOpacity = { .5 } style={{marginLeft:250}} >
          <LinearGradient start={{ x: 0, y: 0.75 }}
                   end={{ x: 1, y: 0.25 }}
                   colors={['#192A56','#2475B0']}
                   style={styles.LinearGradientStyle}>
          <Text style={{fontSize:10,color:'white',padding:10,marginLeft:10}}>View all courses</Text>
        </LinearGradient>
     </TouchableOpacity>
     
                      <View style={{margin:0,width:'100%',height:30,borderWidth:1,borderColor:'transparent'}}>
                    
                      <ImageBackground source={require('./images/logo.png')}

                 style={{width:175,height:30,marginLeft:90,opacity:.5}}
                 imageStyle={{resizeMode:'stretch'}}>
   
              </ImageBackground> 


                    </View>  




        
  

<View style={{width:'100%',backgroundColor:'transparent',height:60,flexDirection:'row',justifyContent:'space-around',borderTopColor:'white',borderTopWidth:2,marginTop:10}}>
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
   

      </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: width, 
    height:height,
    backgroundColor: 'white',
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
, card1:{
  borderRadius:50,
  padding:5,
  marginLeft:15,
  width:'60%',
  height:22,
  elevation:10,
  flexDirection:'row',
  
},
 card2:{
  borderRadius:50,
  padding:5,
  marginLeft:15,
  width:'75%',
  height:22,
  elevation:10,
  flexDirection:'row',
  
},
 card3:{
  borderRadius:50,
  padding:5,
  marginLeft:15,
  width:'85%',
  height:22,
  elevation:10,
  flexDirection:'row',
  
},
 card4:{
  borderRadius:50,
  padding:5,
  marginLeft:15,
  width:'85%',
  height:6,
  elevation:10,
  // flexDirection:'row',
  
},
card:{
        
  padding:5,
  marginLeft:12,
  width:'92%',
  height:85,
  flexDirection:'row',
  elevation:10,marginTop:80
},
// LinearGradientStyle:{
//   height: 40,
//   borderRadius: 31,
//   marginLeft:200,
//   transform:[{translateX:20}]
// },
LinearGradientStyle:{
  width:120,height:30,
  borderRadius:50,
  justifyContent:'center',
  alignItems:'center'
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