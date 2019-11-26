import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,ImageBackground,Image,TextInput
} from 'react-native';
import { Card, CardItem, Body,Button } from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default class ProfilePage extends Component {
    static navigationOptions={
        header:null
    }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
      <View style={styles.firstrow}>
<ImageBackground  source={require('./images/header.png')}
                        style={{width: '100%',height:200,}}
                        imageStyle={{resizeMode:'stretch'}}>

  
                         </ImageBackground>


     
      <View style={styles.thirdrow}>

      <Text style={{fontSize:30,textAlign:"center",fontWeight:"bold"}}>Forgot Password ?</Text>
            <Text style={{fontSize:13,textAlign:"center"}}>we can help you reset your password using your</Text>
             <Text style={{fontSize:13,textAlign:"center"}}>username linked to your account</Text> 
  
      </View>

      </View>
      
      

      <View style={styles.fourthrow}>

      <Card style={{height:130,width:290,borderRadius:80,marginTop:20,paddingTop:20,paddingLeft:40,paddingRight:20}}>
              <CardItem>
                <Body style={{alignItems:'center'}}>
                  <TextInput placeholder="Username"  placeholderTextColor="black"  autoCorrect={false} style={{color:'black',fontSize:15,alignItems:'center'}}></TextInput>
  
                  <Text numberOfLines={1}>
                      ____________________________
                    </Text>
      </Body>
              </CardItem>
            </Card>
                         
                                    
      </View>
                <Image  source={require('./images/tick.png')}
                                    style={{width:70,height:70,transform: [{'translate':[150,-40,1]}] }}/>

      <View style={styles.sevenrow}>
      <ImageBackground  source={require('./images/footer.png')}
                        style={{width: '100%',height:200,}}
                        imageStyle={{resizeMode:'stretch'}}>


<ImageBackground  source={require('./images/button.png')}
                        style={{width: '65%',height:100,}}
                        imageStyle={{resizeMode:'stretch'}}>
                        <Text style={{paddingTop:35,paddingLeft:10,color:'white'}} onPress={() => navigate('Change')}>Back to LOGIN</Text>
      </ImageBackground>

      </ImageBackground>
      </View>



</ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  firstrow: {
    flex: 1,
    backgroundColor: "white"
  },

  secondrow: {
    flex: .4,
    backgroundColor: "white",
    flexDirection:'row',
    marginLeft:180,
    marginTop:100

  },

  thirdrow: {
    flex: .4,
    backgroundColor: "white",
    marginTop:20
    
  },

  fourthrow: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: "white",
    marginTop:20,marginLeft:20
  },
  
  fifthrow: {
    flex: .2,
    backgroundColor: "white"
  }
  ,
  sixrow: {
    flex: .4,
    backgroundColor: 'white'
  },
  sevenrow: {
    flex: 1,
    backgroundColor: 'white',
    height:200
  }
  
});