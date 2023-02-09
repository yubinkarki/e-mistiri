import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashboardStack from './DashboardStack';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import AccountStack from './AccountStack';
import {Colors, Images, TextStyles} from '@app/constants';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => checkIconStatus(focused, route),
        tabBarStyle: Styles.tabBar,
        tabBarLabelStyle: Styles.tabBarLabel,
        tabBarActiveTintColor: Colors.textLink,
        tabBarInactiveTintColor: Colors.productCardSubtitle,
        headerTitleAlign: 'center',
        headerTitleStyle: Styles.headerTitle,
        headerStyle: Styles.header,
        // tabBarHideOnKeyboard: true,
      })}
      screenListeners={() => ({
        tabPress: e => {
          Toast.hide();
        },
      })}>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{headerShown: false, title: 'Home'}}
      />

      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{title: 'Shop', headerTitle: 'All Products'}}
      />

      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{title: 'Cart', headerTitle: 'Shopping Cart'}}
      />

      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{title: 'Account', headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const checkIconStatus = (focused, route) => {
  let iconName;

  switch (route.name) {
    case 'DashboardStack':
      iconName = focused ? (
        <Ionicons name="home" size={22} color={Colors.textLink} />
      ) : (
        <Ionicons name="home" size={22} color={Colors.productCardSubtitle} />
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
        <Images.accountIcon style={{color: Colors.productCardSubtitle}} />
      );
      break;

    default:
      break;
  }

  return iconName;
};

const Styles = StyleSheet.create({
  tabBar: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: 8,
    position: 'absolute',
    overflow: 'hidden',
    bottom: 0,
  },
  tabBarLabel: {
    bottom: 4,
  },
  header: {
    elevation: 0,
  },
  headerTitle: {
    ...TextStyles.poppinsExtraLargeBold,
    fontSize: 24,
  },
});
