import React, {useContext} from 'react';
import Modal from 'react-native-modal';
import {ActivityIndicator, Text, View} from 'react-native';
import {AppContext} from '../../../Context/AppContext';
import CustomInput from '../../../CommonComponents/Input';
import {LadingStyles} from '../styles';
import {FlatList} from 'react-native-gesture-handler';
import LocationList from './LocationList';
import Icon from 'react-native-vector-icons/FontAwesome';

const LocationInputModal: React.FC<any> = ({}) => {
  const {
    showLocationModal,
    locationList,
    updateLocationModal,
    updateLocation,
    location,
    isError,
    isLoading,
  } = useContext(AppContext);

  const renderListItem = ({item}) => {
    const {area = '', city = '', state = ''} = item || {};
    return <LocationList cityState={`${city}, ${state}`} area={area} />;
  };

  const getItemLayout = (_, index) => ({
    length: 60,
    offset: 60 * index,
    index,
  });

  const renderEmptyList = () => {
    if (isError) {
      return <Text>Something went wrong , please try again</Text>;
    } else {
      return (
        <Text>
          {location?.length > 0
            ? 'No results found , retry with other area name'
            : 'Start typing to see suggestions..'}
        </Text>
      );
    }
  };

  return (
    <Modal
      isVisible={showLocationModal}
      backdropOpacity={1}
      coverScreen
      style={LadingStyles.modalContainer}>
      <View style={LadingStyles.header}>
        <Icon
          onPress={updateLocationModal}
          color="#fff"
          name="chevron-left"
          size={22}
        />
        <CustomInput
          value={location}
          onChangeText={updateLocation}
          style={[LadingStyles.inputModal, LadingStyles.extraSpaceOnLeft]}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          initialNumToRender={5}
          data={locationList}
          renderItem={renderListItem}
          showsVerticalScrollIndicator={false}
          getItemLayout={getItemLayout}
          keyExtractor={(item, index) => index?.toString()}
          ListEmptyComponent={renderEmptyList}
        />
      )}
    </Modal>
  );
};

export default LocationInputModal;
