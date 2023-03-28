import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({text, onPress, Prefix = null, type = 'primary', style, disabled}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} />;
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} disabled={disabled}>
      {Prefix ? (
        <View style={[styles.container(type), style, styles.containerIcon]}>
          <Prefix style={styles.prefix} />
          <Text style={styles.text(type)}>{text}</Text>
        </View>
      ) : (
        <View style={[styles.container(type), style]}>
          <Text style={styles.text(type)}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: colors.button[type].backgroundColor,
    borderWidth: 1,
    borderColor: colors.button[type].borderColor,
  }),
  containerIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: type => ({
    ...fonts.style.title.subtitle,
    lineHeight: 20,
    color: colors.button[type].color,
    textAlign: 'center',
  }),
  prefix: {
    marginRight: 9.5,
  },
});
