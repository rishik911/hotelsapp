import React, {useEffect, useRef} from 'react';
import {View, TextInput} from 'react-native';

const CustomInput: React.FC<any> = ({...props}) => {
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const inputRef = useRef(null);
  return (
    <View>
      <TextInput
        ref={inputRef}
        placeholder="Where you want to stay?"
        {...props}
      />
    </View>
  );
};

export default CustomInput;
