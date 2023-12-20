import React from 'react';
import {View, TextInput} from 'react-native';

const CustomInput: React.FC<any> = ({...props}) => {
  return (
    <View>
      <TextInput placeholder="Where you want to stay?" {...props} />
    </View>
  );
};

export default CustomInput;
