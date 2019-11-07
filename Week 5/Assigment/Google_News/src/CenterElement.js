import { StyleSheet, View, Text, TextInput,Animated } from 'react-native'
import React, { Component } from 'react'
import { COLOR } from 'react-native-material-ui';
import { white } from 'react-native-material-ui/src/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 21,
    },
    text: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white',
    },

    textInput: {
        backgroundColor: 'white',
        fontSize: 16,
    }
});



export default class CenterElement extends Component {
    constructor(props){
        super(props)
        this.state = {
            opacityValue : new Animated.Value(0),
            textInput : props.isSearchActive
        }
    }

    componentDidUpdate(nextProps){

        if (this.props.isSearchActive !== nextProps.isSearchActive) {
            this.animateElements(nextProps.isSearchActive);
        }
    }

    animateElements = (nextIsSearchActive) => {
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
            duration: 112,
          
        }).start(() => {
            this.setState({
                textInput: nextIsSearchActive,
            });

            Animated.timing(this.state.opacityValue, {
                toValue: 1,
                duration: 112,
            }).start();
        });
    }


    render() {
        const { onSearchPress, onSearchTextChange, isSearchActive, onTextChange, SearchValue } = this.props
        const { title } = this.props;
        let content = <Text style={[styles.text]}>{title}</Text>;
        const color = isSearchActive ? COLOR.grey600 : 'white';
        const iconProps = {};

        if (!this.state.textInput) {
            content = ( <TextInput style={styles.textInput}
                placeholder="Search"
                placeholderTextColor={COLOR.grey600}
                onChangeText={(text) => onTextChange(text)}
                value={SearchValue}
            /> );
        }else {
            console.log("run hrer")
            content = <Text style={[styles.text]}>{title}</Text>;
        }``

        return (
            <Animated.View style={[styles.container, { opacity: this.state.opacityValue }]}>
                    {content}
             </Animated.View>
        );
    }
}