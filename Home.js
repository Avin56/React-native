import React, {Component } from 'react';
import { View,Text,StyleSheet,ImageBackground} from 'react-native';
import { createAppContainer} from 'react-navigation';
import background from './image/co.jpg';
import AboutPage from'./About';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import * as Animatable from 'react-native-animatable';

class HomePage extends Component {


    render(){
        return (
    
            <ImageBackground source={background} style={styles.backgroundcontainer}>
            <View style={styles.container}>
            <Animatable.Text style={styles.text} animation="zoomInDown" duration={9000} delay={5000}>Welcome to Home Page! Mr.{this.props.navigation.state.params.P1}</Animatable.Text>
       
        <Animatable.Image style={styles.image} source={require("./image/kadhai.jpg")} animation="fadeInRightBig" duration={9000} delay={5000}  easing="ease-out-circ" iterationCount={50} >
            
        </Animatable.Image>
                </View>
                </ImageBackground>
               
        );

    }
}


 
const TabDrawerNavigation=createDrawerNavigator({

    Home: {
        screen: HomePage,
    navigationOptions: 
        {
        tabBarLabel:'Home',
        title:'Home'
        }
    },
    About: {
        screen: AboutPage,
    navigationOptions: 
        {
            title:'About',
       tabBarLabel:'About'
        
    }
  }
    });
 const AppContainer = createAppContainer(TabDrawerNavigation)
  export default AppContainer;
  



const styles=StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems:'stretch'
    },
    text: {
        textAlign: 'center',
        color: 'red',
        fontSize: 40
    },
    backgroundcontainer: {
        flex: 1,
        justifyContent:'center',
        width:null,
        height:null,
        alignItems:'center'
    }
})