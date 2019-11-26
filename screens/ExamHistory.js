
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity,ImageBackground,Dimensions,ScrollView } from 'react-native';
import React from 'react'
import { Card,List,Accordion } from 'react-native-paper';
import Bottomnav from './Bottomnav';
const {width,height} =Dimensions.get('window') 
export default class ExamHistory extends  React.Component {
  static navigationOptions={
    header:null
}
 constructor() {
   super();

   this.state = { expanded1: false,
     expanded2: false,
     expanded3: false,     
   }

   if (Platform.OS === 'android') {
     UIManager.setLayoutAnimationEnabledExperimental(true);
   }
 }

 changeLayout1 = () => {
   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
   this.setState({ expanded1: !this.state.expanded1 });
 }
 changeLayout2 = () => {
   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
   this.setState({ expanded2: !this.state.expanded2 });
 }
 changeLayout3 = () => {
   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
   this.setState({ expanded3: !this.state.expanded3 });
 }

 render() {
  const {navigate} = this.props.navigation;
   return (
     <View style={styles.container}>
       <View style={{width:'100%',height:170,borderWidth:1,borderColor:'transparent'}}>
     <ImageBackground  source={require('./images/home.png')}
                                    style={{height:170,}}
                                    imageStyle={{resizeMode:'stretch'}}>
                                    <View style={{marginTop:50,borderColor:'transparent',borderWidth:1,marginLeft:8,width:200,height:100}}>
                                    <Text style={{color:'white',fontWeight:'bold',fontSize:20,paddingLeft:5}}>Exam History </Text>
                                   
                                    </View>
                                   
                                   
                    </ImageBackground>
     </View>
      
       
       
       <ScrollView>
         <Card activeOpacity={0.8} onPress={this.changeLayout2} style={styles.Btn}>
         
          <List.Accordion title="Mystic spanish course" style={{marginTop:-2}}>
       
         <Text  style={styles.textStyle}>Date                                  :   08/02/2019</Text>
        <Text  style={styles.textStyle}>Time                                 :    6:39 PM</Text>
        <Text  style={styles.textStyle}>Score                                :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Status                               :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Points                               :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Total Attempts                :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Remaining Attempts       :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Remarks                          :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Certificate                       :    Lorem Ipsum</Text>

        </List.Accordion>
        </Card>
       
         <Card activeOpacity={0.8} onPress={this.changeLayout2} style={styles.Btn}>
         
          <List.Accordion title="Mystic spanish course" style={{marginTop:-2}}>
       
         <Text  style={styles.textStyle}>Date                                  :   08/02/2019</Text>
        <Text  style={styles.textStyle}>Time                                 :    6:39 PM</Text>
        <Text  style={styles.textStyle}>Score                                :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Status                               :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Points                               :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Total Attempts                :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Remaining Attempts       :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Remarks                          :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Certificate                       :    Lorem Ipsum</Text>

        </List.Accordion>
        </Card>
       
       
         <Card activeOpacity={0.8} onPress={this.changeLayout2} style={styles.Btn}>
         
          <List.Accordion title="Mystic spanish course" style={{marginTop:-2}}>
       
         <Text  style={styles.textStyle}>Date                                  :   08/02/2019</Text>
        <Text  style={styles.textStyle}>Time                                 :    6:39 PM</Text>
        <Text  style={styles.textStyle}>Score                                :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Status                               :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Points                               :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Total Attempts                :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Remaining Attempts       :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Remarks                          :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Certificate                       :    Lorem Ipsum</Text>

        </List.Accordion>
        </Card>
       
    
         <Card activeOpacity={0.8} onPress={this.changeLayout2} style={styles.Btn}>
         
          <List.Accordion title="Mystic spanish course" style={{marginTop:-2}}>
       
         <Text  style={styles.textStyle}>Date                                  :   08/02/2019</Text>
        <Text  style={styles.textStyle}>Time                                 :    6:39 PM</Text>
        <Text  style={styles.textStyle}>Score                                :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Status                               :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Points                               :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Total Attempts                :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Remaining Attempts       :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Remarks                          :    Lorem Ipsum</Text>
        <Text  style={styles.textStyle}>Certificate                       :    Lorem Ipsum</Text>

        </List.Accordion>
        </Card>
        </ScrollView>
        <View style={{margin:0,width:'100%',height:30,borderWidth:1,borderColor:'blue',marginBottom:20}}>
                   
                     <ImageBackground source={require('./images/logo.png')}

                   style={{width:170,height:30,marginLeft:80}}
                   imageStyle={{resizeMode:'stretch'}}>
     
</ImageBackground> 

                   </View>  
  <Bottomnav style={{justifyContent:'center',alignItems:'center',marginTop:8}}/>


     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   width:width,
   height:height,
   justifyContent:'space-around'

   // paddingTop: (Platform.OS === 'ios') ? 20 : 0
 },

 textStyle: {
   fontSize: 12,
   color: 'black',
   padding: 5
 },

 Btn: {
   padding:5,
   backgroundColor: 'white',
   borderRadius:30,
   elevation:10,
   margin:7,
 },
 // cardStyle:{
 //                 width:'70%',
 //                  height:30,
 //                  borderRadius:50,
 //                   margin:10,
 //                  elevation:10,
 //                 //borderColor:'grey',
 //                  padding:10
 //       },
});