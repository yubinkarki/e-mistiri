import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNav from './BottomTabNav';
import {
  Profile,
  EditProfile,
  Settings,
  ChangePassword,
  MyCart,
} from '@app/screens';
import {BackButton} from '@app/commons';
import {Colors, TextStyles} from '@app/constants';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      name="MainStack"
      screenOptions={{
        headerStyle: Styles.header,
        headerShadowVisible: false,
        headerTitleStyle: Styles.headerTitle,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="BottomTabNav"
        options={{headerShown: false}}
        component={BottomTabNav}
      />

      {/* These screens do not have the bottom tab bar. */}
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          headerLeft: props => (
            <BackButton {...props} onPress={() => navigation.goBack()} />
          ),
          animation: 'slide_from_right',
        })}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={({navigation}) => ({
          headerLeft: props => (
            <BackButton {...props} onPress={() => navigation.goBack()} />
          ),
          animation: 'slide_from_right',
          headerTitle: 'Edit Profile',
        })}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => ({
          headerLeft: props => (
            <BackButton {...props} onPress={() => navigation.goBack()} />
          ),
          animation: 'slide_from_right',
        })}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={({navigation}) => ({
          headerLeft: props => (
            <BackButton {...props} onPress={() => navigation.goBack()} />
          ),
          animation: 'slide_from_right',
          headerTitle: 'Change Password',
          headerTitleStyle: Styles.changePasswordHeaderTitle,
        })}
      />

      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={({navigation}) => ({
          headerLeft: props => (
            <BackButton {...props} onPress={() => navigation.goBack()} />
          ),
          animation: 'slide_from_right',
          headerTitle: 'My Cart',
        })}
      />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
  },
  headerTitle: {
    ...TextStyles.poppinsExtraLargeBold,
    fontSize: 24,
  },
  changePasswordHeaderTitle: {
    ...TextStyles.poppinsExtraLargeBold,
    fontSize: 20,
  },
});
