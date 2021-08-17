import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default  class App extends Component {

  render() {
    return (
         <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Anasayfa" component={HomeScreen}/>
              <Tab.Screen name="Fırsatlar" component={SettingsScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}