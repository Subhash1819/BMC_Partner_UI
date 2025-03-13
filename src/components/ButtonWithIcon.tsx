import React from 'react';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

type ButtonProps = {
  title: string;
  iconName: string;
  iconSize?:number;
  buttonColor?:string;
  buttonTextColor?:string;
  category:string;
  mode:'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
}
const IconButton = ({mode,title,iconName,iconSize,buttonColor,buttonTextColor}:ButtonProps) =>(
  <Button mode={mode} buttonColor={buttonColor} textColor={buttonTextColor} borderColor={'#CBD3DF'} onPress={() => console.log('Pressed')}>
    <Ionicons name={iconName} size={iconSize}/> {title}
  </Button>
);


export default IconButton;
