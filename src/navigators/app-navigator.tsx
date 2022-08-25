import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../screen';
import {View} from 'native-base';

type RootStackParamList = {
  login: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="login"
      screenOptions={{
        cardStyle: {backgroundColor: '#272727'},
        headerMode: 'screen',
      }}>
      <RootStack.Screen
        options={{headerShown: false}}
        name="login"
        component={Login}
      />
    </RootStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
