import { Text, View, BackHandler } from "react-native";
import React from "react";

export default function Home({ navigation }) {
    const backAction =()=>{
        return true
    }
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}