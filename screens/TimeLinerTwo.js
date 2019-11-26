import React from 'react';
import {View,Text,SafeAreaView,Dimensions,StyleSheet,Image} from 'react-native';
import { Card,List,Accordion,Divider } from 'react-native-paper';

class TimeLinerTwo extends  React.Component{
  render(){
    return(
           
             <View style={styles.container}>
             <View style={{width:'100%',height:100,borderWidth:1,borderColor:'transparent',flexDirection:'row',marginTop:20,marginLeft:20}}>
             <Image source={require('./images/activate.png')} style={{width:18,height:18,marginTop:-8 }}/>
             {/* <Divider style={{borderWidth:0.5,borderColor:'grey'}}/> */}
             <View style={{width:50,height:1,borderColor:'grey',borderWidth:1}}></View>
             <Image source={require('./images/activate.png')} style={{width:18,height:18,marginTop:-8}}/>
             <View style={{width:50,height:1,borderColor:'grey',borderWidth:1}}></View>
             <Image source={require('./images/deactivate.png')} style={{width:15,height:15,marginTop:-8}}/>
             <View style={{width:50,height:1,borderColor:'grey',borderWidth:1}}></View>
             <Image source={require('./images/deactivate.png')} style={{width:15,height:15,marginTop:-8}}/>
             <View style={{width:50,height:1,borderColor:'grey',borderWidth:1}}></View>
             <Image source={require('./images/deactivate.png')} style={{width:15,height:15,marginTop:-8}}/>
             </View>
              <View>
              
              </View>
              
              
             </View>
                
           
    )
  }
}
export default TimeLinerTwo;

const styles=StyleSheet.create({
  container:{
             flex:1,
            
             
  }
})