import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../assets';

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.dispatch(StackActions.replace("Home"))
        }, 1000)
    })
    return (
        <View>
            <View style={styles.background}>
                <View style={styles.objCenter}>
                    <Image source={logo} style={styles.imgSize} />
                </View>
            </View>
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#51B8DC"
    },
    imgSize: {
        width: normalize(200),
        height: normalize(200)
    },
    objCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textLogo: {
        fontSize: normalize(30),
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    }
})