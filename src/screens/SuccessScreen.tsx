import React,{ useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMAGE_URLS } from '../common/constants';
import { RootStackNavigation, SuccessScreenProps } from '../common/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Button } from 'react-native-paper';

type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackNavigation, 'SUCCESS_SCREENS'>;
type DetailsScreenRouteProp = RouteProp<RootStackNavigation, 'SUCCESS_SCREENS'>;


const SuccessScreensComponent: React.FC<SuccessScreenProps> = ({ route,navigation }: { route: DetailsScreenRouteProp, navigation: DetailsScreenNavigationProp }) => {
  const { type,otpMode } = route.params;
  useEffect(()=>{
    setTimeout(()=>{
      if(otpMode === 'login'){
        navigation.navigate('ID_VERIFICATION_SCREEN');
      }
    },3000);
  });
  return (
    <View className="flex-1 p-6">
      {type === 'OTP_VERIFICATION_SUCCESS' && (
          <View className="flex-1 justify-center items-center gap-5">
            <Image source={{ uri: IMAGE_URLS.otpVerificationSuccess }} className="w-[200px] h-[155px]" />
            <View className="flex flex-col gap-2 justify-center items-center">
              <Text className="text-xl font-medium text-[#101010]">OTP Verified Successfully</Text>
              <Text className="text-sm font-medium text-[#878787] text-center p-2">OTP has been verified successfully, you can proceed with complete registration</Text>
            </View>
          </View>
        )
      }
      {type === 'REGISTRATION_SUCCESS' && (
        <View className="flex-1 p-6">
          <View className="flex-1 justify-center items-center gap-5">
            <Image source={{ uri: IMAGE_URLS.registrationSuccess }} className="w-[265px] h-[255px]" />
            <View className="flex flex-col gap-2 justify-center items-center">
              <Text className="text-xl font-medium text-[#101010]">👋 Hi Surya,</Text>
              <Text className="text-xl font-medium text-[#101010]">Welcome to BookMyChef</Text>
            </View>
            <Text className="text-sm font-medium text-[#878787] text-center p-2">Thank you for signing up! Setting up your account takes just a moment</Text>
          </View>
          <View className="px-4 pt-8">
            <TouchableOpacity>
              <Button mode={'contained'} buttonColor="#FE6D00" onPress={()=>navigation.navigate('ID_VERIFICATION_SCREEN')}>
                Let's Start
              </Button>
            </TouchableOpacity>
          </View>
        </View>)
      }
    </View>

  );
};

export default SuccessScreensComponent;
