import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {LadingStyles} from '../styles';
import {ComponentCardProps} from '../types';

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  onPressHandler,
  type,
}) => {
  return (
    <Pressable onPress={onPressHandler} style={LadingStyles.input}>
      {type === 'input' && (
        <Text>{title !== '' ? title : 'Where you want to stay?'}</Text>
      )}
      {type === 'date-picker' && (
        <Text>
          {title !== undefined
            ? new Date(title)?.toDateString()
            : 'Select your date?'}
        </Text>
      )}
    </Pressable>
  );
};

export default ComponentCard;
