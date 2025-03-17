import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import OTPScreen from './src/screens/OTPScreen';
import LoginScreen from './src/screens/Login';
import { PaperProvider } from 'react-native-paper';
import { store } from './src/redux/store';
import PartnerRegistrationScreen from './src/screens/PartnerRegistration';
import SnackbarComponent from './src/components/Snackbar';
import { RootStackNavigation } from './src/common/types';
import RegistrationOTPScreen from './src/screens/RegistrationOTPScreen';
import SuccessScreensComponent from './src/screens/SuccessScreen';
import IDVerificationScreen from './src/screens/IDVerificationScreen';

const Stack = createStackNavigator<RootStackNavigation>();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LOGIN" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LOGIN" component={LoginScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="REGISTRATION_OTP_SCREEN" component={RegistrationOTPScreen} />
            <Stack.Screen name="PARTNER_REGISTRATION" component={PartnerRegistrationScreen} />
            <Stack.Screen name="SUCCESS_SCREENS" component={SuccessScreensComponent} />
            <Stack.Screen name="ID_VERIFICATION_SCREEN" component={IDVerificationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <SnackbarComponent />
      </PaperProvider>
    </Provider>
  );
};

export default App;
