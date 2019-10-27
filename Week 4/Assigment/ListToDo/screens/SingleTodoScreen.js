import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// const SingleTodoScreen = props => {
//     const { id, status, body } = props.navigation.getParam('updatedTodo');
//     return (
//       <View style={styles.container}>
//         <Text style={styles.headerText}>
//           {id}. {status}
//         </Text>
//         <Text style={styles.bodyText}>{body}</Text>
//       </View>
//     );
//   };
export default class SingleTodoScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { navigation } = this.props;
        const { id, status, body } = navigation.getParam('updatedTodo');
        
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    {id}. {status}
                </Text>
                <Text style={styles.bodyText}>{body}</Text>
            </View>
        );
    }
};
//export default SingleTodoScreen;

SingleTodoScreen.navigationOptions = {
    title: 'SingleTodoScreen'
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 30
    },
    bodyText: {
        fontSize: 50
    }
});