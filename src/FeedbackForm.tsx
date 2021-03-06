import React, {useState} from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button, Input} from '@ui-kitten/components';
import {Screen} from './Screen';
import {useFeedbackMachineNavigation} from './feedbackMachineHook';

export const FeedbackForm: NavigationStackScreenComponent = ({navigation}) => {
  const [value, setValue] = useState('');
  const {navigate} = useFeedbackMachineNavigation(navigation);

  return (
    <Screen title="Why?" testID="feedbackForm">
      <Input
        testID="input_feedback"
        placeholder="Yes, do tell us why?"
        value={value}
        onChangeText={setValue}
        numberOfLines={1}
        style={{marginBottom: 30, marginLeft: 20, marginRight: 20}}
      />

      <Button
        testID="submit_feedback"
        onPress={() => navigate({type: 'SUBMIT_FEEDBACK', feedback: value})}>
        SUBMIT
      </Button>
    </Screen>
  );
};
