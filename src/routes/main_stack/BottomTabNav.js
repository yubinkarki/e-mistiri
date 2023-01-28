import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardStack from './DashboardStack';
import {Colors, Images} from '@app/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case 'DashboardStack':
              iconName = focused ? (
                <Ionicons name="home" size={23} color={Colors.textLink} />
              ) : (
                <Ionicons
                  name="home"
                  size={23}
                  color={Colors.productCardSubtitle}
                />
              );
              break;

            case 'ShopStack':
              iconName = focused ? (
                <Images.shopIcon style={{color: Colors.textLink}} />
              ) : (
                <Images.shopIcon style={{color: Colors.productCardSubtitle}} />
              );
              break;

            case 'CartStack':
              iconName = focused ? (
                <Images.cartIcon style={{color: Colors.textLink}} />
              ) : (
                <Images.cartIcon style={{color: Colors.productCardSubtitle}} />
              );
              break;

            case 'AccountStack':
              iconName = focused ? (
                <Images.accountIcon style={{color: Colors.textLink}} />
              ) : (
                <Images.accountIcon
                  style={{color: Colors.productCardSubtitle}}
                />
              );
              break;

            default:
              break;
          }

          return iconName;
        },
        tabBarStyle: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginHorizontal: 5,
          position: 'absolute',
          overflow: 'hidden',
          bottom: 0,
        },
        tabBarLabelStyle: {bottom: 4},
        tabBarActiveTintColor: Colors.textLink,
        tabBarInactiveTintColor: Colors.productCardSubtitle,
      })}>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{headerShown: false, title: 'Home'}}
      />

      <Tab.Screen
        name="ShopStack"
        component={DashboardStack}
        options={{title: 'Shop'}}
      />

      <Tab.Screen
        name="CartStack"
        component={DashboardStack}
        options={{title: 'Cart'}}
      />

      <Tab.Screen
        name="AccountStack"
        component={DashboardStack}
        options={{title: 'Account', headerShown: false}}
      />
    </Tab.Navigator>
  );
}
