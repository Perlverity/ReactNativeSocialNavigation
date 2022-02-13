import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>ホーム画面</Text>
      <Button title="Feed" onPress={() => navigation.navigate('Feed')} />
      <Button title="Message" onPress={() => navigation.navigate('Message')} />
    </View>
  );
};

export default HomeScreen;
