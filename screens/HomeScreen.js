import React, {useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



function HomeScreen(props) {
    // useEffect(() => {
    //     console.log("celibataire =", props.params.celibataire);
    //     console.log("frameworks =", props.params.frameworks);
    // }, []);
    const goto = () => {
        props.navigation.push("Root", {
            params: {
                    celibataire:"true",
                    frameworks:["React", "Angular", "Meteor"]
                
            },
            screen: "Profile"
        });
    }
    return (
        <View style={styles.container}>
            <Text>Home </Text>
            <TouchableOpacity onPress={goto}>
                <View style={styles.button}>
                    <Text>Aller à Login</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    },
    button: {
        backgroundColor: 'lightblue',
        borderColor: 'darblue',
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "'40px"
    },
})
export default HomeScreen;