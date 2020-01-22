
import React, { Component } from 'react'
import { Text, View,StyleSheet ,Animated, PanResponder , Easing} from 'react-native'
// import  {PanGe/stureHandler} from 'react-native-gesture-handler'



class Tinder extends React.Component{
    constructor(props){
        super(props)
        const position =  new Animated.ValueXY();

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder:() => true,
            onPanResponderMove:(e, gestureState) =>{
                position.setValue({x:gestureState.dx,y:gestureState.dy})
            },
            onPanResponderRelease:() => {}

        })
        this.position = position
    }

    rendercard(){
        return this.props.data.map((item, index) =>{
            if(index===0){
            return ( 
            <Animated.View 
            key ={item.id}
            style={this.position.getLayout()}
               {...this.panResponder.panHandlers} >
               { this.props.renderCard(item)}
            </Animated.View>
            )
            }
            return this.props.renderCard(item)
        })
    }
    render(){
        console.log('hin')
        return(
            <View>
           
                {this.rendercard()}
            </View>
        )
    }
}
export default Tinder;