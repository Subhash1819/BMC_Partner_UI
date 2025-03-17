import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackNavigation = {
  OTP: {otpMode:string,otpType:string,otpValue:string};
  LOGIN: undefined;
  PARTNER_REGISTRATION:undefined;
  SUCCESS_SCREENS: {otpMode?:string,type?:string};
  REGISTRATION_OTP_SCREEN: undefined;
  ID_VERIFICATION_SCREEN:undefined;
};

export type SuccessScreenProps = NativeStackScreenProps<RootStackNavigation, 'SUCCESS_SCREENS'>;
