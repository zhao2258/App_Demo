import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginPage from "./src/pages/Login/LoginPage";
import scanPage from './src/pages/scanPage/index.js'
import IndexPage from './src/pages/IndexPage/index.js'
import MePage from './src/pages/MePage/index.js'
import OtherPage from './src/pages/OtherPage/index.js'
import Details from './src/pages/Details/index.js'
// import RegPage from "./page/Login/regPage";
// import {FindAccountPage} from "./page/Login/findAccountPage"; 

const App = createBottomTabNavigator(
    {
      IndexPage: { 
        screen: IndexPage,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'首页',
          tabBarIcon:({tintColor,focused}) => (
            <Icon name={'ios-home'} 
            size={26} style={{color:focused ? tintColor : 'gray'}} />
          )
        })
      },
      OtherPage: { 
      screen: OtherPage,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'其他',
        tabBarIcon:({tintColor,focused}) => (
          <Icon name={'ios-cube'} 
          size={26} style={{color:focused ? tintColor : 'gray'}} />
        )
      })
      },
      MePage: { 
        screen: MePage,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'我的',
          tabBarIcon:({tintColor,focused}) => (
            <Icon name={'ios-contact'} 
            size={26} style={{color:focused ? tintColor : 'gray'}} />
          )
        })
      },
    },{
      tabBarOptions:{
        showIcon: true
      }
    }
);

const StackNavigator = createStackNavigator(
  {
      LoginPage:{screen:LoginPage},
      Home: {
          screen: App,
          navigationOptions: ({navigation}) => ({
              header: null
          })
      },
      scanPage:{screen:scanPage},
      Details:{screen:Details}
  },
  {
      initialRouteName: "Home",
      headerLayoutPreset: "center"
  }
)

export default createAppContainer(StackNavigator)
