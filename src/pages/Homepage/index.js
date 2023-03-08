import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {URL} from '../../config';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: URL}} startInLoadingState={true} />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
