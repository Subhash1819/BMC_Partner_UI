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

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="PARTNER_REGISTRATION" component={PartnerRegistrationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <SnackbarComponent />
      </PaperProvider>
    </Provider>
  );
};

export default App;
