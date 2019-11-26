import React from 'react';
import {View,Text} from 'react-native';

export default class SelectLanguage extends React.Component{
    static navigationOptions={
        header:null
    }
    render(){
        return(
            <View>
                <Text>SelectLanguage screen</Text>
            </View>
        )
    }
}