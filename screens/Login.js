import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput, Button } from "react-native";
import React from 'react';
import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [name, setName] = React.useState("name")
    const [pass, setPass] = React.useState("password")

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={logo} style={{margin: 20, width: 100, height: 100 }} />

            <TextInput style={styles.input} onChangeText={setName} placeholder={name}/>
            <TextInput style={styles.input} onChangeText={setPass} placeholder={pass}/>

            <TouchableOpacity
                onPress={()=>{navigation.navigate('home', {name_param: name, pass_param: pass})}}
                style={styles.button}>
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
    input: {
        fontSize: 10,
        height: 50,
        width: 200,
        margin: 10,
        borderWidth: 1,
        borderColor: 0x121212,
        padding: 20,
    },
    button: {
        backgroundColor: "blue",
        width: 100,
        height: 30,
        margin: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#fff',
    },
    image: {
        margin: 20,
    }
});