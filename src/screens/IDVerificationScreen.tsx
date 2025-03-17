import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import { CITY, GENDER, IMAGE_URLS, PREFERRED_CITY } from '../common/constants';
import CustomDatePicker from '../components/DatePicker';
import SelectPicker from '../components/Dropdown';

const IDVerificationScreen = () => {
  const [pickerVisible, setPickerVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return (
    <ScrollView className="bg-white">
      <View className="bg-[#FFF9F1] p-6 w-full flex flex-row justify-between">
        <View>
          {/* Profile Picture & Name */}
          <View className="flex-row items-center mb-2">
            <Image
              source={{
                uri: IMAGE_URLS.blankUserPhoto, // Replace with actual image
              }}
              className="w-14 h-14 rounded-full mr-3"
            />
            <View>
              <Text className="text-lg font-semibold text-gray-900">
                Surya Devireddy
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-500 text-sm">Upload profile picture</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Email */}
          <View className="pl-3">
            <View className="flex-row items-center mb-1 gap-2">
              <MaterialCommunityIcons name="email-outline" size={18} color="#555" className="mr-2" />
              <Text className="text-gray-700 text-sm">suryadevireddy95@gmail.com</Text>
            </View>

            {/* Phone */}
            <View className="flex-row items-center gap-2">
              <MaterialCommunityIcons name="phone" size={18} color="#555" className="mr-2" />
              <Text className="text-gray-700 text-sm">+91 901 902 9545</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity className="flex-row items-center">
          <MaterialCommunityIcons name="account-edit" size={30} color="#555" className="mr-2" />
        </TouchableOpacity>
      </View>
      <View className="p-6 flex flex-col gap-2">
        <View className="flex flex-col gap-1">
          <Text className="text-[#1E1E1E] text-base font-medium">Aadhar Number</Text>
          <TextInput
            placeholder="Enter Aadhar Number"
            className="p-3 rounded-lg border border-gray-300"
          />
        </View>
        <View className="flex flex-col gap-1">
          <Text className="text-[#1E1E1E] text-base font-medium">Upload Aadhar</Text>
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity className="p-4 rounded-lg border border-gray-300 flex-1 items-center mx-1">
              <MaterialCommunityIcons name="photo-camera" size={20} color="#666" />
              <Text className="text-[#1E1E1E] text-xs mt-1">Front View</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-4 rounded-lg border border-gray-300 flex-1 items-center mx-1">
              <MaterialCommunityIcons name="photo-camera" size={20} color="#666" />
              <Text className="text-[#1E1E1E] text-xs mt-1">Back View</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* City */}
        <View className="flex flex-col gap-2">
          <Text className="text-gray-700 text-base font-medium">City</Text>
          <SelectPicker options={CITY} multiSelect={false} />
        </View>
        <View className="flex flex-col gap-1">
          <Text className="text-gray-700 text-base font-medium">Preferred Work Location</Text>
          <SelectPicker options={PREFERRED_CITY} multiSelect={true} />
        </View>
        <View className="flex flex-col gap-1">
          <Text className="text-gray-700 text-base font-medium" onPress={() => setPickerVisible(true)}>Date of Birth</Text>
          <TouchableOpacity onPress={() => setPickerVisible(true)}>
            <TextInput
              placeholder="YYYY-MM-DD"
              value={selectedDate ? selectedDate.toLocaleDateString().split('T')[0] : ''} // YYYY-MM-DD
              editable={false}
              className="p-3 border border-gray-300 rounded-lg h-12"
            />
          </TouchableOpacity>
          <CustomDatePicker
            visible={pickerVisible}
            onClose={() => setPickerVisible(false)}
            onSelectDate={(date: Date) => { console.log(' -- ', date); setSelectedDate(date) }}
            initialDate={selectedDate}
            isYearEditable={true}
          />
        </View>
        <View className="flex flex-col gap-1">
          <Text className="text-gray-700 text-base font-medium">Gender</Text>
          <SelectPicker options={GENDER} multiSelect={false} />
        </View>
        <Button mode="contained" buttonColor="#FFC099" textColor="white" className="rounded-lg mb-4">
          Next
        </Button>
        <TouchableOpacity className="items-center mt-2">
          <Text className="text-gray-500">Skip Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default IDVerificationScreen;
