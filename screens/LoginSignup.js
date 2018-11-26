import React, {Component} from 'react';

import {
    Text,
} from 'react-native';

import {SafeAreaView} from 'react-navigation';
import {Fonts, ViewStyles} from "../Config";

export default class LoginSignup extends Component {
    render() {
        return (
            <SafeAreaView style={ViewStyles.noPadding}>
                <Text style={{alignSelf: 'center', marginTop: 200, fontFamily: Fonts.fontFamily}}>
                    Login/Signup screen
                </Text>
            </SafeAreaView>
        )
    }
}

