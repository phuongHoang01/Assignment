import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ActiveScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
    }
  }
  onTodoActive = () => {
    
    const { navigation } = this.props;
    const completeList = navigation.getParam('updatedActive', 'abc');
    const arr=completeList;
    const completeArr=[...arr]
    
    return(
    completeArr.map((complete)=>{
    return(
    <TouchableOpacity >
      {/* <Text style={styles.headerText}>
        {complete.id}. {complete.status}
      </Text>
      <Text style={styles.bodyText}>{complete.body}</Text> */}
      <Text>ActiveScreen</Text>
    </TouchableOpacity>
    )}
    )
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <this.onTodoCompleteTODO/> */}
        <this.onTodoActive/>
      </View>
    );
  }
};

ActiveScreen.navigationOptions = {
  title: "Active",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff',
   
    flexDirection: 'column'
  },
  headerContainer: {
    flexDirection: 'column'
  },
  headerText: {
    fontSize: 20,
  //  flexDirection: 'column'

  },
  bodyText: {
    fontSize: 20
  }
});
