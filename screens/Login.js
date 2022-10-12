import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import React from 'react';
import logo from '../assets/logo.png';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={logo} style= {{ width: 200, height: 200}}/>
            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.button}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});