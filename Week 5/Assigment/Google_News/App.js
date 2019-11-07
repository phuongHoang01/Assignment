import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet, Text, FlatList, Linking, ImageBackground, TouchableOpacity, Animated, Image } from 'react-native';
import { thisExpression } from '@babel/types';
import moment from 'moment';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconToggle } from 'react-native-material-ui/src';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LeftElement from './src/LeftElement';
import CenterElement from './src/CenterElement';
import RightElement from './src/RightElement';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesList: [],
      isLoading: true,
      page: 1,
      isSearchActive: false,
      searchValue: "",
      slideleft: new Animated.Value(-700)
    }
  }

  static navigationOptions = {
    headerRight: () => (
      <IconToggle name="search" color="black" />
    ),
    title: "News",

    headerLeft: () => (
      <IconToggle name="menu" color="black" />
    ),
  };
  onPressActive = () => {
    this.setState({ isSearchActive: true });

  }

  onPressClose = () => {
    this.setState({ isSearchActive: false, searchValue: "" });

  }

  onPressClearText = () => {
    this.setState({ searchValue: "" }, function () {
      console.log(this.state.searchValue);
    });
  }

  onTextChange = (text) => {
    this.setState({ searchValue: text })
  }

  componentDidMount() {
    this.getNews();
    Animated.timing(
      this.state.slideleft,
      {
        Value: 0,
        duration: 1000
      }
    ).start()
  }

  getNews = async () => {
    let jsonData;
    let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c0724a241a2340a080ae854a5b9f7640&page=1')
    dataJson = await response.json();
    this.setState({ articlesList: dataJson.articles }, () => {
      this.setState({ isLoading: false });
      console.log(this.state.articlesList[2].source.name)
    });
  };

  onPress = (item) => {
    Linking.openURL(item.url).catch((err) => console.error('An error occurred', err));
  }

  renderArticlesList = ({ item }) => {
    return (
      <Card title={item.title}
        image={{ uri: item.urlToImage }}
      >
        <View style={styles.row}>
          <Text style={styles.label}>Source</Text>
          <Text style={styles.info}>hi there</Text>
        </View>
        <Text style={{ marginBottom: 10 }}>
          {item.content}
        </Text>
        <View style={styles.row}>
          <Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {moment(item.publishedAt).format('LLL')}
          </Text>
        </View>
        <Button icon={<Icon />} onPress={
          // () => { Linking.openURL(item.url).catch((err) => console.error('An error occurred', err)) }
          () => this.props.navigation.navigate('Details', {
            article: item,
          })
        }
          title="Read more" backgroundColor="#03A9F4" />
      </Card>
    )
  }



  comeToTheEnd = async () => {
    const newPage = this.state.page + 1;
    console.log('hello,${newPage}');
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c0724a241a2340a080ae854a5b9f7640&page=${newPage}`)
    console.log(response);
    let dataJson = await response.json();
    this.setState({ articlesList: this.state.articlesList.concat(dataJson.articles) }, () => {
      console.log(dataJson);
      this.setState({
        isLoading: false,
        page: newPage
      });

    });
  }
  render() {
    if (this.state.isLoading == true) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    else {
      return (
        <FlatList
          data={this.state.articlesList}
          renderItem={this.renderArticlesList}
          onEndReached={this.comeToTheEnd}
          keyExtractor={(item, index) => index.toString()}
        />  
      )
    }
  }
}


const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row',
    paddingLeft: 10
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  },

  DetailContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  DetailHeader: {
    flex: 0.2,
  },

  imageContent: {
    
  },

  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10
  },

  DetailBody: {
    flex: 0.7,
    paddingLeft:7

  },

  DetailFooter: {
    flex: 0.1,
    backgroundColor: "green"
  }

});

class DetailsScreen extends Component {
  render() {
    let item = this.props.navigation.getParam("article");
    console.log(item);
    return (
      <View style={styles.DetailContainer}>
        <View style={styles.DetailHeader}>
          <Text style={styles.titleText}>
            {item.title}
          </Text>
          {/* <View style={styles.row}>
            <Text style={styles.label}>Author </Text>
            <Text style={styles.info,{paddingLeft:10}}>{item.author}</Text>
          </View> */}
          <View style={styles.row}> 
            <Text style={styles.label}>Published</Text>
            <Text style={styles.info}>
              {moment(item.publishedAt).format('LLL')}
            </Text>
          </View>
        </View>

        <View style={styles.DetailBody}>
          <View style={{ flexDirection: 'column' }}>
          <View style={styles.imageContent}>
            <Image
              style={{ width: 400, height: 200 }}
              source={{ uri: item.urlToImage }}
            />
          </View>
            <Text>
              {item.content}
            </Text>
          </View>
        </View>



        <View style={styles.DetailFooter}>
              
        </View>
      </View>
    )
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
  }
);

// const TabNavigator = createBottomTabNavigator({
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
// });

const AppContainer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return (
      <AppContainer></AppContainer>
      
    )
  }
}



