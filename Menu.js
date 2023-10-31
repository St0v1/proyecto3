import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import TAB1 from "./Tab1";
import TAB2 from "./Tab2";
import TAB3 from "./Tab3";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
          <Tab.Screen name="Lista de Constructores" component={TAB1}
           options={{
            tabBarLabel: 'UConstructores',
            tabBarIcon: ({ color, size }) => (
              <Icon name="body-outline" color={"red"} size={40} />
            ),
          }}
          />   

          <Tab.Screen name="Tab2" component={TAB2}
           options={{
            tabBarLabel: 'Constructores',
            tabBarIcon: ({ color, size }) => (
              <Icon name="newspaper-outline" color={"red"} size={40} />
            ),
          }}
          />   

          <Tab.Screen name="Tab3" component={TAB3}
           options={{
            tabBarLabel: 'Mapa',
            tabBarIcon: ({ color, size }) => (
              <Icon name="newspaper-outline" color={"red"} size={40} />
            ),
          }}
          />   

        </Tab.Navigator>
    );

  }

}
