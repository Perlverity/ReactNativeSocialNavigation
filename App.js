import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeDrawer from './screens/HomeDrawer';
import UserScreen from './screens/UserScreen';
import MessageScreen from './screens/MessageScreen';
import SettingScreen from './screens/SettingScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeDrawer}
          options={{title: 'ホーム画面', headerShown: false}}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{title: 'ユーザ画面'}}
        />
        <Stack.Screen
          name="Message"
          component={MessageScreen}
          options={{title: 'メッセージ画面'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
