import React from 'react';
import {View, Text, Button} from 'react-native';

const UserScreen = ({navigation}) => {
  return (
    <View>
      <Text>ユーザ画面</Text>
      <Button
        title="メッセージ"
        onPress={() => navigation.navigate('Message')}
      />
    </View>
  );
};

export default UserScreen;
