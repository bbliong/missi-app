import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, mainColors} from '../../../utils';
import {Button} from '../../atoms';

const Header = ({onPress, title, hasBack = true}) => {
  return hasBack ? (
    <View style={styles.container}>
      <Button type="icon-only" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text
        style={[styles.text, {paddingLeft: 0, ...fonts.style.heading.small}]}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: mainColors.red,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingLeft: 16,
    lineHeight: 24,
    ...fonts.style.title.base,
    color: mainColors.white100,
  },
});
