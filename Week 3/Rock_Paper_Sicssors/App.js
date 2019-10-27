/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import Button from './src/Component/Button'
import { green } from 'ansi-colors';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userChoose: 'Rock',
      gamePrompt: 'Choose your weapon!',
      computerChoose: 1


    }
  }



  onPress = (userChoose) => {
    this.setState({ userChoose }, () => {
      this.setState({ computerChoose: Math.floor(Math.random() * 3) + 1 }, () => {
        this.gameLogic();
      })
    });




  }

  gameLogic = () => {
    let computerText = CHOICES.find(item => item.id === this.state.computerChoose)

    if (computerText.name === this.state.userChoose) {
      this.setState({ gamePrompt: "Tie!" })
      return;
    }
    else {
      if (this.state.userChoose == "Rock") {
        this.setState({ gamePrompt: this.state.computerChoose == 3 ? "Victory!" : "Defeat!" }, () => {

        });
        return;
      }
      if (this.state.userChoose == "Paper") {
        this.setState({ gamePrompt: this.state.computerChoose == 1 ? "Victory!" : "Defeat!" })
        return;

      }

      if (this.state.userChoose == "Scissors") {
        this.setState({ gamePrompt: this.state.computerChoose == 2 ? "Victory!" : "Defeat!" })
        return;
      }
    }
  }

  changePic = (userText) => {
    let itemNeeded = CHOICES.find(item => item.name === userText)
    return itemNeeded;
  }

  textResultColor = () => {
    if (this.state.gamePrompt === 'Victory!') return 'green';
    if (this.state.gamePrompt === 'Defeat!') return 'red';
    return null;
  }


  render() {

    const userText = this.state.userChoose
    const computerText = CHOICES.find(item => item.id === this.state.computerChoose)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color:this.textResultColor(),fontSize:35 }}>{this.state.gamePrompt}</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.choiceContainer}>
            <Text style={styles.choiceDescription}>
              Player
            </Text>
            <Image
              source={{ uri: this.changePic(userText).uri }}
              resizeMode="contain"
              style={styles.choiceImage}
            />
            <Text style={styles.choiceCardTitle}>
              {userText}
            </Text>
          </View>
          <Text style={{ color: '#250902' }}>vs</Text>
          <View style={styles.choiceContainer}>
            <Text style={styles.choiceDescription}>
              Computer
            </Text>
            <Image
              source={{ uri: computerText.uri }}
              resizeMode="contain"
              style={styles.choiceImage}
            />
            <Text style={styles.choiceCardTitle}>
              {computerText.name}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          {
            CHOICES.map((item, index) => {
              return <Button
                name={item.name}
                key={index}
                onPress={this.onPress}
              />
            })
          }
        </View>

      </View>
    );
  }
}




const CHOICES = [
  {
    id: 1,
    name: 'Rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    id: 2,
    name: 'Paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    id: 3,
    name: 'Scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  }
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },

  header: {
    flex: 0.1,

  },


  body: {
    flex: 0.58,
    backgroundColor: 'white',
    borderWidth: 2,
    paddingTop: 10,
    shadowRadius: 5,
    paddingBottom: 10,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },

  footer: {
    flex: 0.32,

  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  choicesContainer: {
    // flex: 1,
    // margin: 10,
    // borderWidth: 2,
    // paddingTop: 100,
    // shadowRadius: 5,
    // paddingBottom: 100,
    // borderColor: 'grey',
    // shadowOpacity: 0.90,
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'white',
    // justifyContent: 'space-around',
    // shadowColor: 'rgba(0,0,0,0.2)',
    // shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
});



