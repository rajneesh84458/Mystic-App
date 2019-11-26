
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity,ImageBackground,Dimensions,ScrollView,Image } from 'react-native';
import React from 'react'
import { Card,List,Accordion,Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Bottomnav from './Bottomnav';
import { AntDesign,Entypo } from '@expo/vector-icons';
const {width,height} =Dimensions.get('window') 
export default class UploadProductImage extends  React.Component {
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
       <View style={{width:width,height:170,borderWidth:1,borderColor:'transparent',margin:0,padding:0}}>
     <ImageBackground  source={require('./images/home.png')}
                                    style={{height:170,}}
                                    imageStyle={{resizeMode:'stretch'}}>
                                    <View style={{flexDirection:'row',marginTop:30}}>
                                     <AntDesign name="arrowleft" size={15} color="white"  style={{marginLeft:5}}/>
                                     <Text style={{color:'white',fontSize:10,marginLeft:5}}>Back</Text>
                                     <Text style={{color:'white',fontWeight:'bold',fontSize:15,paddingLeft:5,marginLeft:150,marginTop:-5}} >Upload Product Image </Text>
                                     </View>

          <View style={{width:200,height:125,borderColor:'grey',borderWidth:3,position:"absolute",top:40,left:60,transform:[{translateY:20}]}}>
         {/* <Image  source={require('./images/girl.jpeg')} style={{width:200,height:125,zIndex:-1}}/>     */}
                <Text style={{padding:5,marginLeft:5,fontSize:10,top:80,left:50}}>Change picture</Text>
                 <Entypo name="plus" size={20} color="blue"
                style={{marginLeft:80,top:70}} onPress={()=>alert("Upload image")} />

</View>

                    </ImageBackground>
   
     </View>
      
       
       
       <ScrollView>
       <Card style={{width:'90%',elevation:1,margin:20,borderRadius:0}}>

          <List.Accordion title="Product Name" style={styles.Btn} onPress={this.changeLayout2}>

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
        <Divider />
         
          <List.Accordion title="Model" style={styles.Btn} onPress={this.changeLayout2}>
       
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
        <Divider />
         
          <List.Accordion title="Category" style={styles.Btn} onPress={this.changeLayout2}>
       
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
        <Divider />
        <List.Accordion title="Target Type" style={styles.Btn} onPress={this.changeLayout2}>
       
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
      <Divider />
      <List.Accordion title="Category" style={styles.Btn} onPress={this.changeLayout2}>
       
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
      <Divider />
      <List.Accordion title="Serial No" style={styles.Btn} onPress={this.changeLayout2}>
       
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

      <Divider />
      <List.Accordion title="Sold Date" style={styles.Btn} onPress={this.changeLayout2}>
       
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
        <View style={{margin:0,width:'100%',height:30,borderWidth:1,borderColor:'transparent',marginBottom:20}}>
                   
                   <ImageBackground source={require('./images/logo.png')}

                 style={{width:175,height:30,marginLeft:90,opacity:.5}}
                 imageStyle={{resizeMode:'stretch'}}>
   
              </ImageBackground> 

                 </View>  
{/* <Bottomnav style={{justifyContent:'center',alignItems:'center',marginTop:8}}/> */}
<View style={{width:'100%',backgroundColor:'transparent',height:60,flexDirection:'row',justifyContent:'space-around',borderTopColor:'white',borderTopWidth:2,marginTop:30}}>
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
   padding:2,
   backgroundColor: 'white',
   
  
   margin:3,
 },
//  LinearGradientStyle:{
//    height: 45,
//    marginLeft:200,
//    marginRight:20,
//    transform:[{translateY:-60}],
   
//     borderColor:'transparent',
//     borderWidth:2
//  },
 // cardStyle:{
 //                 width:'70%',
 //                  height:30,
 //                  borderRadius:50,
 //                   margin:10,
 //                  elevation:10,
 //                 //borderColor:'grey',
 //                  padding:10
 //       },
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
  width:'100%',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'transparent',borderTopWidth:2,top:5
},

});