import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const UserScreen = ({route}) => {
  useFocusEffect(
    React.useCallback(() => {
      console.log('User Focus');

      return () => {
        console.log('User UnFocus');
      };
    }, []),
  );

  return (
    <View>
      <Text>ユーザ画面</Text>
    </View>
  );
};

export default UserScreen;
