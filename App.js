import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/views/home";
import Notifications from "./src/views/notifications";
//import {firebase} from "@react-native-firebase/firestore";

const Tab = createBottomTabNavigator();
//const users = firebase.firestore().collection('setur').doc('setur').get();
//console.log(users);
export default  class App extends Component {

  render() {
    return (
         <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Anasayfa" component={HomeScreen}/>
              <Tab.Screen name="Fırsatlar" component={Notifications}/>
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}