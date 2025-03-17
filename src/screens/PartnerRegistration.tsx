// import React from 'react';
// import { View, Text, TouchableOpacity, TextInput } from 'react-native';
// import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Button } from 'react-native-paper';
// import { REGISTRATION_FORM } from '../common/constants';

// const PartnerRegistrationScreen = () => {
//   return (
//     <View className="flex-1 p-4">
//       <View className="flex flex-col w-full">
//         {/* Start */}
//         <TouchableOpacity className="flex flex-row">
//           <Ionicons name="chevron-left" size={20} />
//           <Text className="text-base">Back</Text>
//         </TouchableOpacity>
//         <View className="flex flex-col gap-2 pl-2 py-8">
//           <Text className="text-3xl text-[#6C6A69] font-light">Register as</Text>
//           <Text className="text-3xl text-[#FE6D00] font-extrabold">Service Partner</Text>
//         </View>
//         <View className="flex flex-col gap-4">
//           {REGISTRATION_FORM.map((input) =>
//             <View className="gap-2">
//               <Text className="text-base font-normal text-[#1E1E1E]">{input.name}</Text>
//               <TextInput
//                 placeholder={input.placeholder}
//                 className="p-3 border-2 border-slate-200 rounded-lg h-12"
//               />
//             </View>
//           )}
//         </View>
//         <View className="flex flex-row gap-1 justify-center pt-8">
//           <Text className="text-sm font-normal">Already have an account? </Text><TouchableOpacity><Text className="text-[#FE6D00] text-sm">Sign In</Text></TouchableOpacity>
//         </View>
//         <View className="px-4 pt-8">
//           <Button mode={'contained'} buttonColor="#FE6D00">
//             Register
//           </Button>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default PartnerRegistrationScreen;
type RootStackParamList = {
  OTP: undefined;
  LOGIN: undefined;
  PARTNER_REGISTRATION:undefined;
};
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PARTNER_REGISTRATION'>;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import { REGISTRATION_FORM } from '../common/constants';
import { StackNavigationProp } from '@react-navigation/stack';

const PartnerRegistrationScreen = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {
  // State for form inputs & errors
  const [formData, setFormData] = useState(
    REGISTRATION_FORM.reduce(
      (values, field) => ({ ...values, [field.id]: "" }),
      {} as Record<string, string>
    )
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle input change
  const handleInputChange = (fieldId: string, text: string) => {
    setFormData({ ...formData, [fieldId]: text });

    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldId]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    let newErrors: Record<string, string> = {};

    REGISTRATION_FORM.forEach((field) => {
      if (field.required && !formData[field.id].trim()) {
        newErrors[field.id] = `${field.name} is required`;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert("Success", "Registration successful!");
      console.log("Form Submitted", formData);
    }
  };

  return (
    <View className="flex-1 p-4">
      <View className="flex flex-col w-full">
        {/* Back Button */}
        <TouchableOpacity className="flex flex-row items-center">
          <Ionicons className="relative" name="chevron-left" size={26} />
          <Text className="text-base bottom-[1px]">Back</Text>
        </TouchableOpacity>

        {/* Header */}
        <View className="flex flex-col gap-2 pl-2 py-8">
          <Text className="text-3xl text-[#6C6A69] font-light">Register as</Text>
          <Text className="text-3xl text-[#FE6D00] font-extrabold">Service Partner</Text>
        </View>

        {/* Form Fields */}
        <View className="flex flex-col gap-4">
          {REGISTRATION_FORM.map((input) => (
            <View key={input.id} className="gap-2">
              <Text className="text-base font-normal text-[#1E1E1E]">{input.name}</Text>
              <TextInput
                placeholder={input.placeholder}
                className="p-3 border-2 border-slate-200 rounded-lg h-12"
                value={formData[input.id]}
                onChangeText={(text) => handleInputChange(input.id, text)}
              />
              {errors[input.id] && <Text className="text-red-500">{errors[input.id]}</Text>}
            </View>
          ))}
        </View>

        {/* Submit Button */}
        <View className="px-4 pt-8">
          <Button mode={"contained"} buttonColor="#FE6D00" onPress={handleSubmit}>
            Register
          </Button>
        </View>

        {/* Sign In Link */}
        <View className="flex flex-row gap-1 justify-center pt-8">
          <Text className="text-sm font-normal">Already have an account? </Text>
          <TouchableOpacity>
            <Text className="text-[#FE6D00] text-sm">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PartnerRegistrationScreen;
