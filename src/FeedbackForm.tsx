import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Text,
  Icon,
} from '@ui-kitten/components';

const BackIcon = (style: any) => <Icon {...style} name="arrow-back" />;

export const FeedbackForm: NavigationStackScreenComponent<{}, {}> = ({
  navigation,
}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};
