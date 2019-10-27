import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet, Text,FlatList} from 'react-native';
import { thisExpression } from '@babel/types';
import moment from 'moment';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesList: [],
      isLoading: true,
      page : 1
    }
  }

  componentDidMount() {
    this.getNews();
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

  renderArticlesList = ({item}) => {
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
        <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" />
      </Card>
    )
  }

  comeToTheEnd = async () => {
    const {page} = this.state;
    await this.setState({
      page : page
    });
    let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c0724a241a2340a080ae854a5b9f7640&page=${page}')
    let dataJson = await response.json();
    this.setState({ articlesList: dataJson.articles }, () => {
      this.setState({ isLoading: false });
      console.log(this.state.articlesList[2].source.name)
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
          // keyExtractor={articlesList => articlesList.title}
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
    flexDirection: 'row'
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
  }
});
