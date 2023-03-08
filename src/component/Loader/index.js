import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {mainColors} from '../../utils/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={mainColors.red} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: mainColors.black100WOp70,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 18, marginTop: 12, color: mainColors.white100},
});
