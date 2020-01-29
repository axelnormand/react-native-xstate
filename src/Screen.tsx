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
  title: string;
  children: React.ReactNode;
  showBack?: boolean;
  onBack?: () => void;
};
export const Screen: React.FC<Props> = ({
  showBack,
  onBack,
  title,
  children,
}) => {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={onBack} />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#222B45'}}>
      <TopNavigation
        title={title}
        alignment="center"
        leftControl={showBack ? BackAction() : undefined}
      />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {children}
      </Layout>
    </SafeAreaView>
  );
};

const BackIcon = (style: any) => <Icon {...style} name="arrow-back" />;
