import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface MultiSelectPickerProps {
  options: { label: string; value: string }[];
  multiSelect?: boolean;
}

const SelectPicker: React.FC<MultiSelectPickerProps> = ({ options, multiSelect = false }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (value: string) => {
    if (multiSelect) {
      setSelectedValues((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else {
      setSelectedValues([value]);
      setShowDropdown(false);
    }
  };

  return (
    <View className="w-full">
      {/* Picker Button */}
      <TouchableOpacity
        onPress={() => setShowDropdown(!showDropdown)}
        className="border border-gray-300 rounded-lg bg-white px-4 py-3 flex-row justify-between items-center"
      >
        <Text className="text-gray-800">
          {selectedValues.length > 0
            ? selectedValues.map((val) => options.find((opt) => opt.value === val)?.label).join(', ')
            : 'Select' }
        </Text>
        <MaterialCommunityIcons name={showDropdown ? 'chevron-up' : 'chevron-down'} size={20} color="#FE6D00" />
      </TouchableOpacity>

      {/* Dropdown */}
      {showDropdown && (
        <View className="border-2 border-gray-300 rounded-lg bg-white mt-2 p-2 shadow-md">
          <ScrollView className="max-h-40">
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => handleSelect(option.value)}
                className="flex-row items-center px-4 py-2 rounded-md"
              >
                {/* Show checkboxes only for multi-select */}
                {multiSelect && (
                  <MaterialCommunityIcons
                    name={selectedValues.includes(option.value) ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    size={20}
                    color={selectedValues.includes(option.value) ? '#FE6D00' : '#888'}
                  />
                )}
                <Text className={`text-lg text-gray-800 ${multiSelect ? 'ml-2' : ''}`}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SelectPicker;
