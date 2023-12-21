import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {HeaderComponentProps} from '../types';
import {HeaderStyles} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  headerTitle = '',
  showBackButton = false,
  handleBackPress = () => {},
  subTitle = '',
  type = 'landing',
}) => {
  return (
    <View style={HeaderStyles.container}>
      {showBackButton && (
        <Pressable style={HeaderStyles.backHolder}>
          <Icon
            onPress={handleBackPress}
            color="#fff"
            name="chevron-left"
            size={22}
          />
        </Pressable>
      )}
      <View style={HeaderStyles.textHolder}>
        <Text style={HeaderStyles.headerText}> {headerTitle}</Text>
        {type === 'hotel-list' && (
          <Text style={HeaderStyles.subHeader}>{subTitle}</Text>
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;
