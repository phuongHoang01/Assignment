import React from 'react';
import { Alert, TouchableOpacity, View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { TODOS } from '../utils/data'
export default class AllScreen extends React.Component {
  //const [todoList, setTodoList] = useState(TODOS);
  constructor(props) {
    super(props)
    this.state = {
      todoList: TODOS,
      todoBody: '',
      toComplete:[],
    }
    //   console.log(this.state.todoList)

  }

  onSubmitTodo = () => {
  //  console.log(this.state.todoBody)
    const newTodo = {
      body:
        this.state.todoBody,
      status: 'Active',
      id: this.state.todoList.length + 1
    };
    const newTodoList = [...this.state.todoList, newTodo];
    console.log(newTodoList);
    //setTodoList(newTodoList);
    this.setState({ todoList: newTodoList, todoBody: '' })
  };
 onLongPress = (todo) => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  onDeleteTodo = id => {
    const newTodoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({ todoList: newTodoList });
  };
    
  onToggleTodo = id => {
    const todo = this.state.todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    if(todo.status == 'Active'){
      const newListComplete=[...this.state.toComplete,todo];
      this.setState({toComplete:newListComplete})
      this.props.navigation.navigate('CompleteTodo',
        {'updatedComplete': newListComplete});
    //  console.log(newListComplete)
    }
    // else if(todo.status == 'Done'){
    //   const newListComplete=[...this.state.toComplete,todo];
    //   this.setState({toComplete:newListComplete})
    //   this.props.navigation.navigate('ActiveTodo',
    //     {'updatedActive': newListComplete});
    // //  console.log(newListComplete)
    // }
    const foundIndex = this.state.todoList.findIndex(todo => todo.id === id);//
    this.state.todoList[foundIndex] = todo;
    const newTodoList = [...this.state.todoList];
    this.setState({ todoList: newTodoList });
  //  setTimeout(() => {
      this.props.navigation.navigate('SingleTodo', {
        'updatedTodo': todo
      });
   // }, 1000);
  };
  TodoItem = props => {
    const statusStyle = {
      backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green'
    };
    // if(props.todo.status!='Done'){
    //    this.props.navigation.navigate('CompleteTodo',
    //      {'updatedCompleteTODO': props.todo}); 
    //      console.log(props.todo);
    // }
    
 //   console.log(props.todo)
  //  console.log(props)
    return (
      <TouchableOpacity
        key={props.todo.body}
        style={[styles.todoItem, statusStyle]}
        onPress={() => this.onToggleTodo(props.todo.id)}
        onLongPress={() => this.onLongPress(props.todo)}
      >
        <Text style={styles.todoText}>
          {props.index + 1}:{props.todo.body}
        </Text>
      </TouchableOpacity>
      
    );
    
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={{uri:'https://wallpapercave.com/wp/Q48Kvkw.png'}} >
        <KeyboardAvoidingView
          enabled 
          behavior='padding'
          style={{flex:1}}
        >
          <ScrollView contentContainerStyle={styles.scrollView}>
          
              {this.state.todoList.map((todo, index) => {
                return <this.TodoItem
                  key={todo.body}
                  todo={todo}
                  index={index}
                  onToggleTodo={this.onToggleTodo}
                  onDeleteTodo={this.onDeleteTodo}
                />
              })}
              <View style={styles.inputContainer}>
                <TextInput
                  value={this.state.todoBody}
                  style={styles.todoInput}
                  onChangeText={text => this.setState({ todoBody: text })}
                />
                <TouchableOpacity style={styles.button} onPress={this.onSubmitTodo}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

AllScreen.navigationOptions = {
  title: 'All Todos'
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    // backgroundColor: 'black',
    justifyContent: 'center'
  },
  todoItem: {
    margin: 5,
    padding: 10,
    minHeight: 50,
    width: '95%',
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey'
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  scrollView: {
   // flex: 1,
    paddingTop: 1000
    //backgroundColor:'red'
  }
});