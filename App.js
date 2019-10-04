import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createAppContainer  } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from '@expo/vector-icons/FontAwesome';
import CustomersScreen from './components/Customers/customers'
import PlotScreen from './components/Plot-Directions/plot'


export default class App extends React.Component {
    render() {
        return <AppContainer />
    }
}

const AppNavigator = createBottomTabNavigator({
    Plot: {
      screen: PlotScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <Icon name="map" color={tintColor} size={30} />
        )
      }
    },
    Home: {
      screen: CustomersScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
      <Icon name="user-circle-o" size={25} color={tintColor} />
     ),
      }
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeBackgroundColor: '#48dbfb',
      style: {
        backgroundColor: 'white',
      },
      activeTintColor: 'white',
      tintColor: 'black'
    },
  }
);
const AppContainer = createAppContainer(AppNavigator);
