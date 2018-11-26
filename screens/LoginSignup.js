import React, {Component} from 'react';

import {
    Text,
    StyleSheet,
} from 'react-native';

import {SafeAreaView} from 'react-navigation';
import {Fonts, ViewStyles} from "../Config";

export default class LoginSignup extends Component {
    render() {
        return (
            <SafeAreaView style={ViewStyles.noPadding}>
                <Text style={styles.text}>
                    Login/Signup screen
                </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginTop: 200,
        fontFamily: Fonts.fontFamily
    },
});
