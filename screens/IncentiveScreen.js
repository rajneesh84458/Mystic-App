
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity,ImageBackground,Dimensions,ScrollView,Image } from 'react-native';
import React from 'react'
import { Card,List,Accordion ,Menu, Divider, Provider,} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Bottomnav from './Bottomnav';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const {width,height} =Dimensions.get('window') 
export default class Incentive extends  React.Component {
    static navigationOptions={
        header:null
    }
 constructor() {
   super();

   this.state = { expanded1: false,
     expanded2: false,
     expanded3: false,  
     visible: false,   
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
 _openMenu = () => this.setState({ visible: true });

 _closeMenu = () => this.setState({ visible: false });

 render() {
    const {navigate} = this.props.navigation;
   return (
     <View style={styles.container}>
       <View style={{width:'100%',height:170,borderWidth:1,borderColor:'transparent'}}>
     <ImageBackground  source={require('./images/home.png')}
                                    style={{height:170,}}
                                    imageStyle={{resizeMode:'stretch'}}>
                 
<Provider>
<View style={{width:100,height:50,borderWidth:1,borderColor:'transparent',marginLeft:270,marginTop:25}}>
      <Menu 
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <TouchableOpacity onPress={this._openMenu}>
              <Entypo name="dots-three-vertical" size={15} color="white" />
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => {}} title="View Targets" />
            
            <Divider />
            <Menu.Item onPress={() => navigate('UploadImage')} title="Upload New" />
            
          </Menu>
          </View>
      </Provider>
      
   <View style={{borderColor:'transparent',borderWidth:1,marginLeft:8,width:200,height:100}}>
      <Text style={{marginTop:-20,color:'white',fontWeight:'bold',fontSize:15,paddingLeft:5}} >Upload <Text>Product Image</Text> </Text>
                                    
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
        <View style={{margin:0,width:'100%',height:30,borderWidth:1,borderColor:'transparent',marginBottom:20}}>
                   
                     <ImageBackground source={require('./images/logo.png')}

                   style={{width:170,height:30,marginLeft:80}}
                   imageStyle={{resizeMode:'stretch'}}>
     
</ImageBackground> 

                   </View>  
<View style={{width:'100%',backgroundColor:'transparent',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'white',borderTopWidth:2,marginTop:5}}>
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
 LinearGradientStyle:{
   height: 45,
   marginLeft:200,
   marginRight:20,
   transform:[{translateY:-60}],
   
    borderColor:'transparent',
    borderWidth:2
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