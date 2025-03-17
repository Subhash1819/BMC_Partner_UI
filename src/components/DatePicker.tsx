import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import clsx from 'clsx';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CustomDatePickerProps {
    visible: boolean;
    onClose: () => void;
    onSelectDate: (date: Date) => void;
    initialDate?: Date;
    isYearEditable?: boolean; // Add a prop to control year editability
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    visible,
    onClose,
    onSelectDate,
    initialDate = new Date(),
    isYearEditable,
}) => {
    const [currentDate, setCurrentDate] = useState<Date>(initialDate);
    const [editYear, setEditYear] = useState<string>(currentDate.getFullYear().toString());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
        daysArray.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
    }

    const goToNextMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);
        setEditYear(newDate.getFullYear().toString());
    };

    const goToPrevMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(newDate);
        setEditYear(newDate.getFullYear().toString());
    };
    const handleYearChange = () => setCurrentDate(new Date(parseInt(editYear), month, 1));

    const onDayPress = (day: number | null) => {
        if (day) {
            onSelectDate(new Date(year, month, day));
        }
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <TouchableWithoutFeedback onPress={onClose}>
                <View className="flex-1 justify-end bg-black/50">
                    <TouchableWithoutFeedback>
                        <View className="bg-white rounded-t-3xl flex flex-col items-center px-2 pb-4">
                            <View className="border-2 border-[#CED3DE] w-20 rounded-md mt-2" />
                            <View className="flex flex-row pt-5 gap-14 items-center">
                                <TouchableOpacity onPress={goToPrevMonth} className="border-2 border-slate-200 rounded-md p-2">
                                    <MaterialCommunityIcons name="chevron-left" size={24} />
                                </TouchableOpacity>
                                <View className="flex flex-col items-center justify-center gap-2">
                                    <Text className="text-lg font-bold">
                                        {currentDate.toLocaleString('default', { month: 'long' })}
                                    </Text>
                                    <TextInput
                                        value={editYear}
                                        keyboardType="numeric"
                                        onChangeText={setEditYear}
                                        onBlur={handleYearChange}
                                        className="px-2 border-b-2 border-[#CED3DE]"
                                        editable={isYearEditable}
                                         // Control editability based on the prop
                                    />
                                </View>
                                <TouchableOpacity onPress={goToNextMonth} className="border-2 border-slate-200 rounded-md p-2">
                                    <MaterialCommunityIcons name="chevron-right" size={24} />
                                </TouchableOpacity>
                            </View>
                            <View className="flex flex-row pt-6">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                                    <Text key={index} className="!w-1/7 font-medium text-center text-[#8F9BB3]">
                                        {day}
                                    </Text>
                                ))}
                            </View>
                            <View className="flex flex-row flex-wrap">
                                {daysArray.map((day, index) => {
                                    const isSelected =
                                        day &&
                                        initialDate.getDate() === day &&
                                        initialDate.getMonth() === month &&
                                        initialDate.getFullYear() === year;

                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            className={clsx(
                                                '!w-1/7 h-10 justify-center items-center my-1 rounded-full',
                                                isSelected && 'bg-[#FE6D00]'
                                            )}
                                            onPress={() => onDayPress(day)}
                                            disabled={!day}
                                        >
                                            <Text className={clsx('', isSelected && 'font-bold text-white')}>
                                                {day ? day : ''}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default CustomDatePicker;
