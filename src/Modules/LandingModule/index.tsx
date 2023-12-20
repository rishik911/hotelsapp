import React, {useCallback, useContext, useMemo} from 'react';
import {LandingPageProps} from './types';
import {Text, View} from 'react-native';
import {HEADER_NAMES, NAVIGATION_SCREENS} from '../../Utils/strings';
import HeaderComponent from '../../CommonComponents/Header/HeaderComponent';

import {LadingStyles} from './styles';
import LocationInputModal from './Components/LocationInputModal';
import {DatePickerModal} from 'react-native-paper-dates';
import {AppContext} from '../../Context/AppContext';
import ComponentCard from './Components/ComponentCard';
import Button from '../../CommonComponents/Button';

const LandingPage: React.FC<LandingPageProps> = (props, {}) => {
  const {
    showDatePicker,
    handleDatePicker,
    date,
    location,
    updateLocationModal,
    updateDate,
  } = useContext(AppContext);

  const validRange = useMemo(() => {
    return {
      startDate: new Date() || undefined,
      endDate: undefined,
      disabledDates: undefined,
    };
  }, []);

  const isDisabled = useMemo(() => {
    return date === undefined || location === '';
  }, [date, location]);

  const handleContinue = useCallback(() => {
    props.navigation.navigate(NAVIGATION_SCREENS.HOTEL_LISTING_PAGE);
  }, []);

  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        type="landing"
        headerTitle={HEADER_NAMES.LANDING_PAGE}
        showBackButton={false}
      />
      <View style={LadingStyles.container}>
        <ComponentCard
          type="input"
          onPressHandler={updateLocationModal}
          title={location}
        />
        <View style={{marginVertical: 12}}>
          <ComponentCard
            type="date-picker"
            title={date}
            onPressHandler={handleDatePicker}
          />
        </View>
        <Button
          isDisabled={isDisabled}
          buttonTitle="Continue"
          handleOnPress={handleContinue}
        />
      </View>
      <LocationInputModal />

      <DatePickerModal
        locale="en"
        mode="single"
        visible={showDatePicker}
        onDismiss={handleDatePicker}
        date={date}
        validRange={validRange}
        onConfirm={updateDate}
      />
    </View>
  );
};

export default LandingPage;
