import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



function WelcomeScreen(props) {
    // const goto =()=>{
    //     // console.log('props', props)
    //     props.navigation.push('Login', {
    //         nom:"Julen",
    //         age:"56 ans"
    //     });
    // };

    const goto = () =>{
        props.navigation.push("Root", {
            params:{
                
            },
            screen: "Login"
        });
    }
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <TouchableOpacity onPress={goto}>
                <View style={styles.button}>
                    <Text>Aller à Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

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
        borderWidth:2,
        justifyContent: "center",
        alignItems:"center",
        width:"100px",
        height:"'40px"
    },
});
export default WelcomeScreen;