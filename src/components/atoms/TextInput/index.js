import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';

import {fonts, mainColors} from '../../../utils';

import {IcEyeOpen, IcEyeClose, IcClear} from '../../../assets/icons';

const TextInput = ({
  label,
  placeholder,
  type = 'text',
  formType = '',
  setForm,
  form,
  error,
  onTouched = () => console.log('touched'),
  editable = true,
  ...restProps
}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [onActive, setOnActive] = useState(false);

  const reset = () => {
    setForm(formType, '');
  };

  const onBlur = () => {
    onTouched(formType);
    setOnActive(false);
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      {type === 'password' ? (
        <View style={styles.containerGroup}>
          <TextInputRN
            style={[
              styles.input,
              !editable && styles.disabled,
              onActive > 0 && styles.filled,
              error && styles.containerError,
            ]}
            placeholder={placeholder}
            secureTextEntry={passwordVisible}
            value={form}
            onChangeText={value => setForm(formType, value)}
            editable={editable}
            onFocus={() => setOnActive(true)}
            onBlur={() => onBlur()}
            {...restProps}
          />
          <TouchableOpacity
            style={styles.password}
            onPress={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? <IcEyeClose /> : <IcEyeOpen />}
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.containerGroup}>
          <TextInputRN
            style={[
              styles.input,
              !editable && styles.disabled,
              onActive > 0 && styles.filled,
              error && styles.containerError,
            ]}
            placeholder={placeholder}
            value={form}
            onChangeText={value => setForm(formType, value)}
            editable={editable}
            onFocus={() => setOnActive(true)}
            onBlur={() => onBlur()}
            {...restProps}
          />

          <TouchableOpacity style={styles.password} onPress={() => reset()}>
            {form !== '' && <IcClear />}
          </TouchableOpacity>
        </View>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default TextInput;

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
  },
  containerGroup: {
    // flex: 1,
    justifyContent: 'center',
  },
  password: {
    position: 'absolute',
    right: 20,
  },
  disabled: {
    backgroundColor: mainColors.white90,
  },
  filled: {
    backgroundColor: mainColors.white100,
    borderColor: mainColors.gold100,
  },
  containerError: {
    borderColor: mainColors.red,
  },
  error: {
    ...fonts.style.body.small,
    color: mainColors.red,
    lineHeight: 18,
  },
});
