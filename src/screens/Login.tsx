import React, { useState,useEffect, useCallback } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import ButtonWithIcon from '../components/ButtonWithIcon';
import { IMAGE_URLS } from '../common/constants';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  OTP: undefined;
  LOGIN: undefined;
  PARTNER_REGISTRATION:undefined;
};
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LOGIN'>;

const Login = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {
  const [text, setText] = useState<string>('');
  const [isNumber, setIsNumber] = useState<Boolean>(false);
  useEffect(() => {
    setIsNumber(text.length === 10 && !isNaN(Number(text))); // True only for 10-digit numbers
  }, [text]);
  const onChangeTextInput = useCallback((input: string) => {
    if (!isNaN(Number(input))) {
      setText(input.slice(0, 10)); // Restrict input to 10 digits
    }else {
      setText(input);
    }
  }, []);
  const navigateToOtpScreen = () =>{
    navigation.navigate('OTP');
  };
  const navigateToPartnerRegistrationScreen = () =>{
    navigation.navigate('PARTNER_REGISTRATION');
  };
  return (
    <SafeAreaView className="flex-1 p-6">
      {/* Top Section */}
      <View className="flex-1 justify-center items-center">
        <View className="flex flex-row justify-center">
          <Image source={{ uri: IMAGE_URLS.bmcSquareLogo }} className="w-[140px] h-[97px]" />
        </View>
      </View>

      {/* Middle Section */}
      <View className="flex-1 justify-center">
        <View className="flex flex-column gap-2 ">
          <Text className="text-4xl text-[#101010] font-bold">Login</Text>
          <Text className="text-sm text-[#878787]">As a service partner</Text>
        </View>
        <View className="mt-5 flex flex-col gap-2 py-6">
          <Text className="text-base font-normal">Email / Mobile Number</Text>
          <TextInput
            placeholder="Enter your number"
            value={text}
            onChangeText={onChangeTextInput}
            className="p-3 border-2 border-slate-400 rounded-lg h-12"
          />
        </View>
        {isNumber &&
          <View className="flex flex-col gap-2">
            <View className="flex flex-row gap-4">
              <View className="border-b border-gray-300 my-2 w-20" />
              <Text className="text-center text-sm font-light text-[#404040]">Recieve OTP Through</Text>
              <View className="border-b border-gray-300 w-20 my-2" />
            </View>
            <View className="flex flex-row justify-evenly">
              <ButtonWithIcon mode="outlined" category="Ionicons" title="SMS" iconName="android-messages" iconSize={16} buttonColor="#F1FFF3" buttonTextColor="black" />
              <ButtonWithIcon mode="outlined" category="FontAwesome6" title="Whatsapp" iconName="whatsapp" iconSize={16} buttonColor="#F1FFF3" buttonTextColor="black" />
            </View>
          </View>}
      </View>

      {/* Bottom Section */}
      <View className="flex-1 justify-center">
        <Button mode={'contained'} buttonColor="#FE6D00" onPress={navigateToOtpScreen}>
          Generate OTP
        </Button>
        <View className="flex flex-row gap-1 justify-center pt-4">
          <Text className="text-sm font-normal">Don't have an account? </Text><TouchableOpacity onPress={navigateToPartnerRegistrationScreen}><Text className="text-[#FE6D00] text-sm font-bold">Register</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
