import React from 'react';
import { Platform } from 'react-native';
import { 
		createStackNavigator, 
		createBottomTabNavigator, 
		createMaterialTopTabNavigator,
		createSwitchNavigator,
		createDrawerNavigator
		} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreenMen from '../screens/HomeScreenMen';
import HomeScreenWomen from '../screens/HomeScreenWomen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from '../screens/CartScreen';

const HomeStackMen = createStackNavigator({
  Home: HomeScreenMen
});

const HomeStackWomen = createStackNavigator({
  Home: HomeScreenWomen
});

HomeStackMen.navigationOptions = {
  tabBarLabel: 'Men',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


HomeStackWomen.navigationOptions = {
  tabBarLabel: 'Women',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const CartStack = createStackNavigator({
  Cart: CartScreen,
});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-cart'}
    />
  ),
};

const Home = createMaterialTopTabNavigator({
  HomeStackMen,
  HomeStackWomen
});

export default createMaterialTopTabNavigator({
  Home,
  LinksStack,
  SettingsStack,
  CartStack
});



//https://infinitered.github.io/ionicons-version-3-search/