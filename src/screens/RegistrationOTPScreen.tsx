import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IMAGE_URLS } from '../common/constants';
import { RootStackNavigation } from '../common/types';
import { StackNavigationProp } from '@react-navigation/stack';

type RegistrationOTPScreenNavigationProp = StackNavigationProp<RootStackNavigation, 'OTP'>;

const RegistrationOTPScreen = ({ navigation }: { navigation: RegistrationOTPScreenNavigationProp }) => {
  const navigateToOTPScreen = ({type,value}:{type:string,value:string}) =>{
    navigation.navigate('OTP',{otpMode:'registration',otpType:type,otpValue:value});
  };
  return (
    <View className="flex-1 p-4">
      <View className="flex flex-col w-full items-start">
        <TouchableOpacity className="flex flex-row" onPress={() => navigation.navigate('LOGIN')}>
          <Ionicons name="chevron-left" size={20} />
          <Text className="text-base">Back</Text>
        </TouchableOpacity>
      </View>
      <View className="p-2 pt-8">
        <Text className="text-3xl text-[#6C6A69] w-48 font-light">Confirm <Text className="text-[#FE6D00] font-bold">OTP</Text> Using ?</Text>
      </View>
      <View className="pt-11">
        <TouchableOpacity className="p-4" onPress={()=>navigateToOTPScreen({type:'email',value:'jssrsubhash.k@gmail.com'})}>
          <View className="flex flex-row border-2 border-[#CBD3DF] p-4 rounded-lg items-center">
            <Image source={{ uri: IMAGE_URLS.emailOTPIcon }} className="w-10 h-10" />
            <View className="flex flex-col pl-8">
              <Text className="text-base font-medium text-[#000314]">Email</Text>
              <Text className="text-sm font-light text-[#000314]">jssrsubhash.k@gmail.com</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="p-4" onPress={()=>navigateToOTPScreen({type:'number',value:'+91 949 278 9000'})}>
          <View className="flex flex-row border-2 border-[#CBD3DF] p-4 rounded-lg items-center">
            <Image source={{ uri: IMAGE_URLS.mobileNumberOTPIcon }} className="w-10 h-10" />
            <View className="flex flex-col gap-2 pl-8">
              <Text className="text-sm font-medium text-[#000314]">Mobile Number</Text>
              <Text className="text-sm font-light text-[#000314]">9492789000</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationOTPScreen;
