import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageScreen from './MessageScreen';
import FeedScreen from './FeedScreen';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
