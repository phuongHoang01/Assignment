import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CompleteScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
    }
  }
  // onTodoCompleteTODO=()=>{
  //   const { navigation } = this.props;
  //   const completeListTODO = navigation.getParam('updatedCompleteTODO', 'bcd');
  //   console.log(completeListTODO)
  //   return(
  //     <TouchableOpacity  >
  //       <Text style={styles.headerText}>
  //         {completeListTODO.id}. {completeListTODO.status}
  //       </Text>
  //       <Text style={styles.bodyText}>{completeListTODO.body}</Text>
  
  //     </TouchableOpacity>
  //     );
  // }
  onTodoComplete = () => {
    
    const { navigation } = this.props;
    const completeList = navigation.getParam('updatedComplete', 'abc');
    const arr=completeList;
    const completeArr=[...arr]
    
    return(
    completeArr.map((complete)=>{
    return(
    <TouchableOpacity  key={complete.id}>
      <Text style={styles.headerText}>
        {complete.id}. {complete.status}
      </Text>
      <Text style={styles.bodyText}>{complete.body}</Text>

    </TouchableOpacity>
    )}
    )
    );
  }
  // OnCompleteTodo = (props) => {
  //   //const newTodo = {status,body,id};
  //   const newTodoList = [...this.state.todoList, props.newComplete];
  //   console.log(newTodoList);
  //   //setTodoList(newTodoList);
  //   this.setState({ todoList: newTodoList})
  //   return (
  //     <TouchableOpacity
  //       key={props.body}
  //       style={styles.headerText}
  //    //   onPress={() => this.onToggleTodo(props.todo.id)}
  //    //   onLongPress={() => this.onLongPress(props.todo)}
  //     >
  //       <Text style={styles.todoText}>
  //         {props.todo.id}:{props.newComplete.body}:{props.newComplete.status}
  //       </Text>     
  //     </TouchableOpacity>
  //   );
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <this.onTodoCompleteTODO/> */}
        <this.onTodoComplete/>
      </View>
    );
  }
};

CompleteScreen.navigationOptions = {
  title: "Complete"
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
