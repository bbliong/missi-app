import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Loading, Header} from '../../../components/molecules';
import {URL_PP} from '../../../config';

const PrivacyPolicy = ({navigation}) => {
  const url = URL_PP;

  const onNavChange = state => {
    const titleWeb = 'Privacy &  Policy';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'Privacy & Policy'}]});
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Privacy & Policy" onPress={() => navigation.goBack()} />
      <WebView
        source={{uri: url}}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
        onNavigationStateChange={onNavChange}
      />
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
