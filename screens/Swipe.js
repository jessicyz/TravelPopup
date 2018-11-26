import React, {Component} from 'react';

import {
    Text,
    StyleSheet,
} from 'react-native';

import {SafeAreaView} from 'react-navigation';
import {Fonts, ViewStyles} from "../Config";

export default class Survey extends Component {
    render() {
        return (
            <SafeAreaView style={ViewStyles.noPadding}>
                <Text style={styles.text}>
                    Swipe screen
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
