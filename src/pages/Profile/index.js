import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {fonts, mainColors} from '../../utils';
import {Gap} from '../../components/atoms';
import {Header} from '../../components/molecules';

import {
  IcEdit,
  IcBack,
  IcInfo,
} from '../../assets';


const Profile = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Header title="Account" hasBack={false} />
      <View style={styles.wrapper}>
        <Gap height={16} />
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <View style={styles.cardAccount}>
            <View style={styles.cardAccountGroup}>
              <IcEdit style={styles.cardAccountIcon} />
              <Text style={styles.cardAccountText}>Edit Profile</Text>
            </View>
            <IcBack />
          </View>
        </TouchableOpacity>
        <Gap height={16} />
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
          <View style={styles.cardAccount}>
            <View style={styles.cardAccountGroup}>
              <IcInfo style={styles.cardAccountIcon} />
              <Text style={styles.cardAccountText}>Privacy Policy</Text>
            </View>
            <IcBack />
          </View>
        </TouchableOpacity>

        <Gap height={16} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.white100,
    flex: 1,
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
  cardAccountGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardAccountIcon: {
    height: 18,
    width: 18,
    marginRight: 10,
  },
  cardAccountText: {
    ...fonts.style.body.base,
    color: mainColors.black90,
  },
  logout: {
    ...fonts.style.title.subtitle,
    color: mainColors.red,
  },
  containerLogout: {
    padding: 16,
    textAlign: 'center',
  },
  title: {
    ...fonts.style.title.subtitle,
    color: mainColors.black90,
    textAlign: 'center',
  },
  subTitle: {
    ...fonts.style.body.small,
    color: mainColors.black70,
    textAlign: 'center',
    paddingHorizontal: 6,
  },
  containerLogoutButton: {
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
});
