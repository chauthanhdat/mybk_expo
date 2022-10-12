import { Text, View, BackHandler, StyleSheet } from "react-native";
import React from "react";

export default function Home({ navigation, route }) {
    const backAction = () => {
        return true
    }
    BackHandler.addEventListener("hardwareBackPress", backAction);

    const { name_param, pass_param } = route.params

    return (
        <View style={styles.container}>
            <Text>
                This is {JSON.stringify(name_param)} with password: {JSON.stringify(pass_param)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
