
import React, { Component } from 'react'
import { Text, View,StyleSheet ,Animated, Easing} from 'react-native'
import  {PanGestureHandler} from 'react-native-gesture-handler'
import Tinder from './Tinder'

const mydata = [
  {
    id: 1,
    text: 'card 1',
    uri: 'https://source.unsplash.com/RDcEWH5hS',
  },
  { id: 2, text: 'card 2', uri: 'https://source.unsplash.com/pJqfhKUpCh8' },
  {
    id: 3,
    text: 'card 3',
    uri: 'https://source.unsplash.com/H601tyBZy',
  },
  { id: 4, text: 'card 4', uri: 'https://source.unsplash.com/CE9YG0_Mzlw' },
  { id: 5, text: 'card 5', uri: 'https://source.unsplash.com/-_C4UZRpoQc' },
  { id: 6, text: 'card 6', uri: 'https://source.unsplash.com/RfoISVdKM4U' },
];

export default class RnGestureHandler extends Component {

  renderCard(item){
    return (
      <View key ={item.id}>
         <Text>{item.text}</Text>
      </View>
    )
  }


    render() {
        return (
            <View style={[styles.container]}>
            <Tinder 
              data = {mydata}
              renderCard = {this.renderCard}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "space-around",
      // flexDirection: "column",
      backgroundColor: "#fff"
    },

    circle: {
        width: 150,
        height: 150,
        backgroundColor: "#c00000",
        borderRadius: 100
      },
  })