import React from "react";
import { View, Text, StyleSheet } from "react-native";



function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:'1',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    }
}) 
export default ProfileScreen;