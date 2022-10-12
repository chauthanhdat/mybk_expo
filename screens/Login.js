import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={() => alert('Hello!')} style={styles.button}>
                <Text style={styles.buttonText}>Hello</Text>
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