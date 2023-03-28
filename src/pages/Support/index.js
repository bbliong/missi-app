import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {fonts, mainColors} from '../../utils';

import {Header} from '../../components/molecules';
import {IcLogo} from '../../assets/icons';

const Support = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Support Center" hasBack={false} />
      <View style={styles.containerBody}>
        <Image source={IcLogo} />
        <Text style={styles.title}>Coming Soon!</Text>
        <Text style={styles.subtitle}>We will notify you one this feature is ready</Text>
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.white100,
    flex: 1,
  },
  containerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    padding: 4,
  },
  cardAccount: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoutButton: {
    borderRadius: 4,
    backgroundColor: mainColors.red,
    color: mainColors.white100,
    flexGrow: 1,
    marginLeft: 10,
  },
  logoutButtonCancel: {
    borderRadius: 4,
    backgroundColor: mainColors.white100,
    color: mainColors.black90,
    borderColor: mainColors.black90,
    borderWidth: 1,
    flexGrow: 1,
    marginRight: 10,
  },
  textlogoutButton: {
    ...fonts.style.title.subtitle,
    paddingHorizontal: 16,
    paddingVertical: 10,
    lineHeight: 20,
    textAlign: 'center',
    color: mainColors.white100,
  },
  textlogoutButtonCancel: {
    ...fonts.style.title.subtitle,
    paddingHorizontal: 16,
    paddingVertical: 10,
    lineHeight: 20,
    textAlign: 'center',
    color: mainColors.black90,
  },
  title: {
    ...fonts.style.heading.small,
    lineHeight: 26,
    paddingTop: 24,
  },
  subtitle: {
    ...fonts.style.body.small,
    lineHeight: 18,
    color: mainColors.black80,
    paddingTop: 4,
  },
});
