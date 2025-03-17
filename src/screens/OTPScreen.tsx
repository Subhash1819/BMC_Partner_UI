import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { OTP } from '../common/constants';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
  OTP: undefined;
  LOGIN: undefined;
  PARTNER_REGISTRATION:undefined;
};
type OTPScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OTP'>;

const OTPScreen = ({ navigation }: { navigation: OTPScreenNavigationProp }) => {
  const [otp, setOtp] = useState<string[]>(Array(OTP.OTP_LENGTH).fill('')); // For 4-digit OTP
  const inputsRef = useRef<(TextInput | null)[] >([]);
  const [timeLeft, setTimeLeft] = useState<number>(OTP.OTP_EXPIRY_TIMEOUT);
  const [isExpired, setIsExpired] = useState(false);

  const handleChange = (value, index:number) => {
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index:number) => {
    if (index > 0 && otp[index] === '') {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const resendOTP = () => {
    setOtp(Array(OTP.OTP_LENGTH).fill(''));
    inputsRef.current[0]?.focus();
    setTimeLeft(OTP.OTP_EXPIRY_TIMEOUT);
    setIsExpired(false);
    Alert.alert('','OTP has been resent!');
  };
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsExpired(true);
      setOtp(Array(OTP.OTP_LENGTH).fill('')); // Clear OTP when expired
    }
  }, [timeLeft]);
  return (
    <View className="flex-1 p-4">
    <View className="flex flex-col w-full">
      {/* Start */}
      <TouchableOpacity className="flex flex-row items-center">
        <Ionicons name="chevron-left" className="relative" size={26} />
        <Text className="text-base bottom-[1px]">Back</Text>
      </TouchableOpacity>
      <View className="flex flex-col gap-2 pt-8 pl-2">
        <Text className="text-3xl text-[#6C6A69] font-light">Enter Verification</Text>
        <Text className="text-3xl text-[#FE6D00] font-extrabold">Code</Text>
      </View>
      <View className="pt-4 pl-2">
        <Text className="text-[#404040] font-light">We have sent a verification code to your email jssrsubhash.k@gmail.com </Text>
      </View>
      </View>
      {/* Center */}
      <View className="flex-1 items-center gap-4 mt-20">
        <View className="flex-row space-x-3 justify-center">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              value={digit}
              maxLength={1}
              keyboardType="number-pad"
              className="w-16 h-16 text-center text-4xl font-semibold border-b-2 border-gray-400"
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={({ nativeEvent }) =>
                nativeEvent.key === 'Backspace' && handleBackspace(index)
              }
            />
          ))}
        </View>
        {isExpired ? (
        <Text className="text-red-500 font-semibold">OTP Expired!</Text>
      ) : (
        <Text className="text-gray-500 font-semibold">
          The verification code will expire in {timeLeft}s
        </Text>
      )}
      </View>
      {/* End */}
      <View className="flex-1">
        <TouchableOpacity className="mt-10" onPress={resendOTP}>
          <Text className="text-[#FE6D00] font-semibold text-center">Resend Code</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
};

export default OTPScreen;