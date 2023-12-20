import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../Modules/LandingModule';
import HotelListing from '../Modules/HotelListingModule';
import {NAVIGATION_SCREENS} from '../Utils/strings';

const Stack = createStackNavigator();

const HotelListingAppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NAVIGATION_SCREENS.LANDING_PAGE}
        component={LandingPage}
      />
      <Stack.Screen
        name={NAVIGATION_SCREENS.HOTEL_LISTING_PAGE}
        component={HotelListing}
      />
    </Stack.Navigator>
  );
};

export default HotelListingAppStack;
