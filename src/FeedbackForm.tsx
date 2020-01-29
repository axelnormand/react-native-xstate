import React, {useState} from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button, Input} from '@ui-kitten/components';
import {Screen} from './Screen';

export const FeedbackForm: NavigationStackScreenComponent = ({navigation}) => {
  const [value, setValue] = useState('');

  return (
    <Screen title="Why?">
      <Input
        placeholder="Yes, do tell us why?"
        value={value}
        onChangeText={setValue}
        numberOfLines={1}
        style={{marginBottom: 30, marginLeft: 20, marginRight: 20}}
      />

      <Button
        onPress={() => {
          navigation.navigate('Thanks');
        }}>
        SUBMIT
      </Button>
    </Screen>
  );
};
