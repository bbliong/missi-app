import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mainColors} from '../../../utils';

const Identifier = (height, width) => {
  return <View style={[styles.identifier]} />;
};

export default Identifier;

const styles = StyleSheet.create({
  identifier: {
    height: 1,
    width: '100%',
    backgroundColor: mainColors.gold60,
    marginVertical: 10,
  },
});
