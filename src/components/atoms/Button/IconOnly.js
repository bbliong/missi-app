import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IcArrow} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    return <IcArrow />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
