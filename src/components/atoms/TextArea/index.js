import React from 'react';
import {StyleSheet, View, TextInput as TextInputRN} from 'react-native';

import {mainColors} from '../../../utils';

const TextArea = ({
  placeholder,
  formType = '',
  setForm,
  form,
  ...restProps
}) => {
  return (
    <View style={styles.containerGroup}>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        value={form}
        multiline={true}
        numberOfLines={4}
        onChangeText={form => setForm(formType, form)}
        {...restProps}
      />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: mainColors.white90,
    backgroundColor: mainColors.white90,
    color: mainColors.black90,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    textAlignVertical: 'top',
    height: 150,
  },
  containerGroup: {},
});
