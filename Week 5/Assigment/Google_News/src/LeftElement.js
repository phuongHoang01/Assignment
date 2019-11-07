import { IconToggle } from 'react-native-material-ui/src';
import React, { Component } from 'react'
import {View,Text,Animated} from 'react-native'
import { COLOR } from 'react-native-material-ui';
import { tsImportEqualsDeclaration } from '@babel/types';
export default class LeftElement extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            rotate : new Animated.Value(0),
            leftElement : 'menu'
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // goes to search state
        if (this.props.isSearchActive && !prevProps.isSearchActive) {
            console.log(this.props.isSearchActive)
            this.animate({ toValue: 1, LeftElement: 'arrow-forward' });
        }
        // goes to default look
        if (!this.props.isSearchActive && prevProps.isSearchActive) {
            this.animate({ toValue: 0, LeftElement: 'menu' });
        }
    }

    // compo    

    // componentDidUpdate(){
    //     Animated.timing(
    //         this.state.rotate,
    //         {
    //             toValue: 1,
    //             duration: 3000,
    //         }
    //     ).start();
    // }

    // static getDerivedStateFromProps(props, state) {
    //     if(props.isSearchActive !== state.isSearchActive){
    //         console.log(props.isSearchActive)
    //         console.log(state.isSearchActive)
    //         return { ...this.state, isSearchActive: props.isSearchActive }
    //     }
    // }
   
    animate = ({toValue,LeftElement}) => {
        Animated.timing(
            this.state.rotate,
            {
                toValue: 0.5,
                duration: 500
            }
        ).start(() => {
            this.setState({ leftElement:LeftElement }); 

            Animated.timing(
                this.state.rotate,
            {
                toValue,
                duration: 122,
            }).start();
        });      
    }
    
    

    render() {
        console.log(this.state.leftElement)
        const spin = this.state.rotate.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','180deg']
        })
        const { onClosePress,isSearchActive} = this.props
       // const iconProps = {};

        // if(isSearchActive){
        //     iconProps.name = this.state.element,
        //     iconProps.color = COLOR.grey600
        //     iconProps.onPress =  onClosePress
        //     return (
        //         <Animated.View style={{
        //             transform: [{ rotate:spin  }]
        //         }}>
        //             <IconToggle {...iconProps}/>
        //         </Animated.View>
        //     )
        // }
        // else {
        //     iconProps.name = "menu",
        //     iconProps.color = "white"
        //     return (
        //         <View>
        //             <IconToggle {...iconProps}/>
        //         </View>
        //     );
        // }

        return (
            <Animated.View style={{
                transform: [{ rotate:spin  }]
            }}>
                <IconToggle 
                name ={this.state.leftElement}
                color={isSearchActive ? COLOR.grey600 : 'white'}
                onPress={onClosePress}
                />
            </Animated.View>
        )
        
    }


}