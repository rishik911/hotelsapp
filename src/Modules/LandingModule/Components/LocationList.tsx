import React, {useContext} from 'react';
import {Pressable, Text} from 'react-native';
import {LocationListProps} from '../types';
import {LadingStyles} from '../styles';
import {AppContext} from '../../../Context/AppContext';

const LocationList: React.FC<LocationListProps> = ({area, cityState}) => {
  const {selectLocationUpdate} = useContext(AppContext);

  const handleLocationUpdate = () => {
    selectLocationUpdate(area);
  };
  return (
    <Pressable
      onPress={handleLocationUpdate}
      style={LadingStyles.locationListItem}>
      <Text>{area}</Text>
      <Text>{cityState}</Text>
    </Pressable>
  );
};

export default React.memo(LocationList);
