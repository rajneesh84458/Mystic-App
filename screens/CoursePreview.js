import React from 'react';
import {View,Text,Dimensions,SafeAreaView,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem,  Body } from 'native-base';
import Bottomnav from './Bottomnav';
const {width,height} =Dimensions.get('window')
export default class CoursePreview extends React.Component{
  render(){

     return( 
       <SafeAreaView style={styles.container}>
       
         <View style={{flex:.3,height:200,borderColor:'transparent',borderWidth:1}}>
         <ImageBackground  source={require('./images/home.png')}
                                    style={{height:170,width:'100%'}}
                                    imageStyle={{resizeMode:'cover'}}>
                                     <View style={{marginTop:40,borderColor:'transparent',borderWidth:1,marginLeft:8,width:200,height:100}}>
                                    <Text style={{color:'white',fontWeight:'bold',fontSize:17,paddingLeft:5}}>Course Preview </Text>
                                    
                                    </View>
   <View style={{width:200,height:100,borderWidth:1,borderColor:'transparent',marginTop:-60,marginLeft:220}}>
       <Text style={{fontWeight:'bold',fontSize:20}}>Lorem Ipsum</Text>

    </View>

                    </ImageBackground>
    
    


<View style={{width:'100%',height:300,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'transparent'}}>
<Card style={{width:'80%',height:300}} >
            <CardItem header>
              <Text>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
</View>



<View style={{marginTop:40}}>
    <TouchableOpacity  style={{width:140,height:40,borderColor:'transparent',borderWidth:1,marginLeft:100,backgroundColor:'blue',borderRadius:50,justifyContent:'center',alignItems:'center',}}>
     <Text style={{color:'white',fontSize:20}}>Take Exam</Text>
   </TouchableOpacity>       
          
            </View>  
            <View style={{margin:0,width:'100%',height:30,borderWidth:1,borderColor:'transparent',marginTop:20}}>
                   
                     <ImageBackground source={require('./images/logo.png')}

                   style={{width:175,height:30,marginLeft:90,opacity:.5}}
                   imageStyle={{resizeMode:'stretch'}}>
     
</ImageBackground> 

                   </View>  
  {/* <Bottomnav style={{justifyContent:'center',alignItems:'center',marginTop:8}}/> */}
</View>
       </SafeAreaView>
      
     )

  }
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      width:width,
      height:height,
      backgroundColor:'transparent'

  },
  cardStyle:{
     width:110,
     height:110,
     borderWidth:1,
     borderColor:'grey',
     borderRadius:30,
     marginLeft:10,
     justifyContent:'center',
     elevation:10

  },
  textstyle:{
    textAlign:'center',
    
  }
})