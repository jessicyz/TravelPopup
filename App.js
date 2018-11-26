import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

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

const MainNavigator = createStackNavigator(
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

export default App = createAppContainer(MainNavigator);

