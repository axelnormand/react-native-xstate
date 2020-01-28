import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

export const Home: NavigationStackScreenComponent<{}, {}> = ({navigation}) => (
  <SafeAreaView style={{flex: 1}}>
    <TopNavigation title="Feedback" alignment="center" />
    <Divider />
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => {
          navigation.navigate('FeedbackForm');
        }}>
        FEEDBACK
      </Button>
    </Layout>
  </SafeAreaView>
);
