import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native'

export default class ButtonStyle extends Component {
    render() {
        return (
            <View style={styles.buttonStyle}>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={()=> this.props.onPress(this.props.name)}
                >
                    <Text style={styles.buttonText}>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
    },

    buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
      },
})