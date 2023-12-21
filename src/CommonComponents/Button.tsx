import React from 'react';
import {ButtonProps} from './types';
import {Pressable, Text} from 'react-native';
import {ButtonStyles} from './styles';

const Button: React.FC<ButtonProps> = ({
  buttonTitle,
  handleOnPress,
  isDisabled = false,
}) => {
  return (
    <Pressable
      disabled={isDisabled}
      android_ripple={{color: 'white', borderless: false}}
      style={[
        isDisabled
          ? ButtonStyles.buttonBackgroundOnDiabled
          : ButtonStyles.buttonBackground,
        ButtonStyles.container,
      ]}
      onPress={handleOnPress}>
      <Text style={ButtonStyles.textStyle}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default Button;
