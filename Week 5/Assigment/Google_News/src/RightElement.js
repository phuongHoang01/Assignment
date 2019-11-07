import { IconToggle } from 'react-native-material-ui'
import React, { Component } from 'react'
import {View,Text} from 'react-native'
import { COLOR } from 'react-native-material-ui';
export default class LeftElement extends Component {
    render() {
        const {onSearchPress, onSearchClear, isSearchActive, searchValue} = this.props

        if (isSearchActive && searchValue.length === 0) {
            return null;
        }

        const iconProps = {};

        if( isSearchActive && searchValue.length > 0){
            iconProps.name = "clear",
            iconProps.color = COLOR.grey600
            iconProps.onPress  = onSearchClear
        }else {
            iconProps.name = "search",
            iconProps.color = "white"
            iconProps.onPress = onSearchPress
            console.log("rightElement "+isSearchActive)
        }

      
        return (
            <View>
                <IconToggle 
                    {...iconProps}
                    />
            </View>
        );
    }
}