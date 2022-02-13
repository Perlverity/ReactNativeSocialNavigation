import React from 'react';
import {View, Text, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      console.log('Home Focus');

      return () => {
        console.log('Home UnFocus');
      };
    }, []),
  );
  return (
    <View>
      <Text>ホーム画面</Text>
      <Button
        title="ユーザ"
        onPress={() =>
          navigation.navigate('User', {
            userId: 1,
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
