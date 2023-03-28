import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  IcHome,
  IcHomeActive,
  IcChat,
  IcChatActive,
  IcProfile,
  IcProfileActive,
} from '../../../assets/icons';

import {fonts, mainColors} from '../../../utils/';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeActive /> : <IcHome />;
    case 'Support':
      return focus ? <IcChatActive /> : <IcChat />;
    case 'Profile':
      return focus ? <IcProfileActive /> : <IcProfile />;
    default:
      return <IcHome />;
  }
  return <IcHome />;
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.menuContainer} key={index}>
              <Icon label={label} focus={isFocused} />
              <Text style={isFocused ? styles.textActive : styles.text}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    elevation: 7,
  },
  menuContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    ...fonts.style.body.small,
    color: mainColors.black70,
  },
  textActive: {
    ...fonts.style.body.small,
    color: mainColors.black100,
  },
});
