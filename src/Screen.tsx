import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Text,
} from '@ui-kitten/components';

type Props = {
  title: string;
  children: React.ReactNode;
  showBack?: boolean;
  onBack?: () => void;
  testID?: string;
};
export const Screen: React.FC<Props> = ({
  showBack,
  onBack,
  title,
  children,
  testID,
}) => {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={onBack} testID="click_back" />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#222B45'}} testID={testID}>
      <TopNavigation
        alignment="center"
        leftControl={showBack ? BackAction() : undefined}
      />
      <Layout style={{marginTop: 40, marginBottom: 40, alignItems: 'center'}}>
        <Text category="h2">{title}</Text>
      </Layout>
      <Layout style={{flex: 1, alignItems: 'center'}}>{children}</Layout>
    </SafeAreaView>
  );
};

const BackIcon = (style: any) => <Icon {...style} name="arrow-back" />;
