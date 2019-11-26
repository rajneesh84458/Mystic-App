import React from 'react';
import {View,Text,Dimensions,StyleSheet,ImageBackground,Image,TextInput,TouchableOpacity,AppRegistry,SafeAreaView} from 'react-native';
import { Card, CardItem, Body,Button ,Input,Item} from 'native-base'

const {width,height} = Dimensions.get("window")

export default class App extends React.Component{
  static navigationOptions={
    header:null
}

  render(){
    const {navigate} = this.props.navigation;
    return(
           <SafeAreaView>
            <View style={styles.container}>


            <View style={{width:'100%',height:200,borderColor:'transparent',borderWidth:1}}>
            <ImageBackground source={require('./images/header.png')}
                         style={{width: width,height:200,}}
                        imageStyle={{resizeMode:'stretch'}}>
<View style={{flexDirection:'row' ,borderColor:'transparent',borderWidth:2,width:170,height:120,transform: [{'translate':[200,135,1]}]}}>
      <Text style={{padding:10,paddingTop:35,paddingLeft:5,fontSize:10}}>Set language</Text>
      <Image source={require('./images/set.png')}
             style={{width:100,height:100,marginRight:20,marginBottom:2}}/>
     </View>
            </ImageBackground>
</View>

<View style={styles.thirdrow}>
      <Text style={{fontSize:30,fontWeight:'bold',marginLeft:10}}>Login</Text>
        <Text style={{fontSize:10,marginLeft:10}}>Welcome back!Enter your credientials & explore</Text>

      </View>

      <View style={styles.fourthrow}>

<Card style={{marginLeft:0,height:140,width:270,paddingTop:20,paddingLeft:20,paddingRight:20,borderBottomEndRadius:70,borderTopEndRadius:70,elevation:10}}>
      <CardItem style={{height:100}}>
        <Body style={{marginLeft:-35,borderColor:'transparent',borderWidth:1,paddingLeft:-15,marginTop:-10,height:100}} >
      <TextInput placeholder="Username" placeholderTextColor="black"    style={{marginLeft:10}}></TextInput>
      <Text style={{marginBottom:10}} numberOfLines={1}>
                         ______________________________
                  </Text>
      <TextInput placeholder="Password" placeholderTextColor="black"  secureTextEntry={true}  style={{marginLeft:10}}></TextInput>

       </Body>
      </CardItem>
    </Card>

</View>
                  

                <Image  source={require('./images/tick.png')}
                                    style={{width:65,height:65,transform: [{'translate':[220,-75,1]}] }}
                                   
                                    />


<TouchableOpacity>
                    <Text style={{marginLeft:10,marginTop:5}}>Forgot Password ?</Text>
                    </TouchableOpacity>
  
                 
      
<ImageBackground source={require('./images/footer.png')}
                         style={{width: width,height:200,justifyContent:'flex-end'}}
                        imageStyle={{resizeMode:'stretch'}}>
                        <View style={{width:300,height:100,borderColor:'transparent',borderWidth:1,marginTop:-20}}>
                        
                        <ImageBackground  source={require('./images/button.png')}
                        style={{width: '75%',height:90,marginTop:-20}}
                        imageStyle={{resizeMode:'stretch'}}
                         >
  <Text style={{margin:0,paddingTop:28,paddingLeft:10,color:'white'}}  onPress={() => navigate('SignUp')}  >REGISTER</Text>
      </ImageBackground>
     
      
                        </View>   
                        </ImageBackground>
            </View>
            </SafeAreaView>
    )
  }


}

const styles=StyleSheet.create({
  container:{
       width:width,
       height:height
  },
  thirdrow: {
    flex: .4,
    backgroundColor: "white",
    marginTop:5,
    width:250
    
  },
  fourthrow: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: "white",
    marginTop:20
  },
  
})

AppRegistry.registerComponent('Route', () => Route);