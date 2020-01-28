import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';

type Props = {
  children: React.ReactNode;
  showBack?: boolean;
  onBack?: () => void;
};
export const Screen: React.FC<Props> = ({showBack, onBack, children}) => {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={onBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Feedback"
        alignment="center"
        leftControl={showBack ? BackAction() : undefined}
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {children}
      </Layout>
    </SafeAreaView>
  );
};

const BackIcon = (style: any) => <Icon {...style} name="arrow-back" />;
