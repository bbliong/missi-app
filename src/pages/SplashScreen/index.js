import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import {IcLogo, IcLogoNameRed} from '../../assets/icons';
import {mainColors} from '../../utils/colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainApp');
    }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={IcLogo} />
      <Image source={IcLogoNameRed} style={styles.logoName} />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoName: {
    marginTop: 10,
    width: 140,
    height: 40,
  },
});
