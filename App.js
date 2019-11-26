import React from 'react';
import {AppRegistry,Dimensions} from 'react-native'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SignUpScreen from './screens/SignupScreen';
import ProfilePage from './screens/ProfilePage';
import RouteScreen from './screens/RouteScreen';
import ChangePwd from './screens/ChangePwd';
import SignupSecond from './screens/SignupSecond';
import SignupThird from './screens/SignupThird';
import SignupFourth from './screens/SignupFourth';
import SignupFifth from './screens/SignupFifth';
import GiftScreen from './screens/GiftScreen';

import EditProfileScreen from './screens/EditProfileScreen';
import ProfileScreen from './screens/ProfileScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import SelectLanguage from './screens/SelectLanguage';
import Points from './screens/Points';
import Incentive from './screens/IncentiveScreen';
import CoursePreview from './screens/CoursePreview';
import CourseList from './screens/CourseList';
import ExamHistory from './screens/ExamHistory';
import Setting from './screens/Setting';
import UploadProductImage from './screens/UploadproductImage';
import CustomSideBar from './screens/CustomSideBar';


console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default class App extends React.Component{
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
      };
    
    render(){
        return <AppContainer/>
    }
}


const DrawerNavigatorExample = createDrawerNavigator({
  
    defaultScreen: { screen: LandingPageScreen},
   
 },
   
  {
    contentComponent: CustomSideBar,
    drawerWidth: Dimensions.get('window').width - 100,
  });
const MainNavigator = createSwitchNavigator({
Route:{screen:RouteScreen},
SignUp: {screen: SignUpScreen},
SignUp2:{screen:SignupSecond},
SignUp3:{screen:SignupThird},
SignUp4 :{screen:SignupFourth},
SignUp5:{screen:SignupFifth},
Profile:{screen:ProfilePage},
Change:{screen:ChangePwd},
Gift:{screen:GiftScreen},
EditProfileScreen:{screen:EditProfileScreen},
ProfileScreen:{screen:ProfileScreen},
Landing:{screen:DrawerNavigatorExample},
Language:{screen:SelectLanguage},
Points:{screen:Points},
Incentive:{screen:Incentive},
CoursePreview:{screen:CoursePreview},
CourseList:{screen:CourseList},
ExamHistory:{screen:ExamHistory},
Test:{screen:Setting},
UploadImage:{screen:UploadProductImage}


});


   
const AppContainer = createAppContainer(MainNavigator);
AppRegistry.registerComponent('App', () => App);
