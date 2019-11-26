import React, { Component } from 'react'
import { Text, View,SafeAreaView ,ImageBackground,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import { AntDesign,Entypo,Ionicons } from '@expo/vector-icons';
import { Searchbar, TextInput } from 'react-native-paper';
import { Container, Header, Content, Item, Input,Card,Icon,Picker,CardItem } from 'native-base';
import Bottomnav from './Bottomnav';
// import Icon from 'react-native-vector-icons/Ionicons';
export default class CourseList extends Component {
  state = {
    selected: undefined,
    firstQuery: '',
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
   
  }
  render() {
    const { firstQuery } = this.state;
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,}}>
      <View style={{width:'100%',height:150,borderColor:'transparent',borderWidth:1}}>
      <ImageBackground  source={require('./images/home.png')}
                                    style={{height:170,}}
                                    imageStyle={{resizeMode:'stretch'}}>
                                    <View style={{flexDirection:'row',marginTop:30}}>
                                     <AntDesign name="arrowleft" size={15} color="white"  style={{marginLeft:5}}/>
                                     <Text style={{color:'white',fontSize:10,marginLeft:10}}>Back</Text>
                                     </View>
                                     <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginLeft:10,marginTop:5}}>All Courses List </Text>
                                    

                    </ImageBackground>
                    </View>
                      <View  style={{width:'100%',height:50,borderWidth:1,borderColor:'transparent'}}>
                  <Searchbar  style={{borderRadius:30,elevation:5,marginRight:10,marginLeft:10,width:'90%'}}
                  placeholder="Search"
                  onChangeText={query => { this.setState({ firstQuery: query }); }}
                  value={firstQuery}
                />
                     </View>
                     <ScrollView>
        <Card style={styles.card}>
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
               <Text style={{color:'white',fontSize:10}}>View Result</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:120,height:30,backgroundColor:'blue',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'white',fontSize:10}}>View Points & rewards</Text>
             </TouchableOpacity>
             </View>
            </View>
      </Card>
        <Card style={styles.card}>
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
               <Text style={{color:'white',fontSize:10}}>View Result</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:120,height:30,backgroundColor:'blue',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'white',fontSize:10}}>View Points & rewards</Text>
             </TouchableOpacity>
             </View>
            </View>
      </Card>
        <Card style={styles.card}>
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
               <Text style={{color:'white',fontSize:10}}>View Result</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:120,height:30,backgroundColor:'blue',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'white',fontSize:10}}>View Points & rewards</Text>
             </TouchableOpacity>
             </View>
            </View>
      </Card>
        <Card style={styles.card}>
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
               <Text style={{color:'white',fontSize:10}}>View Result</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:120,height:30,backgroundColor:'blue',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'white',fontSize:10}}>View Points & rewards</Text>
             </TouchableOpacity>
             </View>
            </View>
      </Card>
        <Card style={styles.card}>
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
               <Text style={{color:'white',fontSize:10}}>View Result</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:120,height:30,backgroundColor:'blue',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'white',fontSize:10}}>View Points & rewards</Text>
             </TouchableOpacity>
             </View>
            </View>
      </Card>
</ScrollView>
<View style={{width:'100%',backgroundColor:'blue',height:50,flexDirection:'row',justifyContent:'space-around',borderTopColor:'white',borderTopWidth:2,marginTop:10}}>
     
<View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/points.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom} onPress={() => navigate('Points')}>Points</Text>      
       </View>
     
        <View style={styles.imgStyle} >
       <Image resizeMode="cover"source={require('./images/peopleicon.png')} style={{width:15,height:15,}} />
       <Text style={styles.textbottom} onPress={() => alert('Exam')}>People</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/homeicon.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom} onPress={() => navigate('Incentive')}>Home</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/gifticon.png')} style={{width:15,height:15,}} />
       <Text style={styles.textbottom} onPress={() => navigate('Gift')}>Gifts</Text>      
       </View>
     
        <View style={styles.imgStyle}>
       <Image resizeMode="cover"source={require('./images/incentive.png')} style={{width:15,height:15,}}/>
       <Text style={styles.textbottom} onPress={() => navigate('SelectLanguage')}>Incentive</Text>      
       </View>
     
       </View>
      </View>
      </SafeAreaView>
    )
  }
}


const styles=StyleSheet.create({
  card:{
        
    padding:5,
    marginLeft:12,
    width:'92%',
    height:85,
    flexDirection:'row',
    elevation:10,marginTop:20
  },
  card1:{
    borderRadius:50,
    padding:5,
    marginLeft:25,
    width:'85%',
    elevation:10,
    flexDirection:'row',
    marginTop:5
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
})
