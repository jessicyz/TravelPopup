import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import LoginSignup from './screens/LoginSignup';

import {Colors, Fonts} from "./Config";

const navBarWithBackButton = {
    headerTransparent: false,
    headerTintColor: Colors.primary,
    headerStyle: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation: 0,
        height: 40,
    },
    headerTitleStyle: {
        fontWeight: Fonts.weight.medium,
        fontFamily: Fonts.fontFamily,
    },
};

const navBarDisabled = {
    header: null,
    gesturesEnabled: false,
    mode: 'modal',
};

export default getRootStack = () => {
    return createStackNavigator(
        {
            LoginSignupScreen: LoginSignup,
        },
        {
            initialRouteName: 'LoginSignupScreen',
            navigationOptions: ({ navigation }) => {
                // Disable navigation bar for LoginSignup bar but display for all other screens
                if (['LoginSignupScreen'].includes(navigation.state.routeName)) {
                    return navBarDisabled;
                } else {
                    return navBarWithBackButton;
                }
            }
        }
    );
};
