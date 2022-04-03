import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {colors, layout, size} from '../styles';

const roundedStyle = {
  backgroundColor: colors.primary,
  borderRadius: 40,
  padding: size.iconLg / 4,
  ...layout.center,
  marginHorizontal: size.sm,
};

export const IconButton = ({onPress, icon, s, rounded, color, style, lg}) => (
  <TouchableOpacity onPress={onPress} style={[rounded && roundedStyle, style]}>
    <Icon
      name={icon}
      size={s ? size.iconMd : lg ? 40 : size.iconLg}
      color={color ? color : colors.primary}
    />
  </TouchableOpacity>
);
