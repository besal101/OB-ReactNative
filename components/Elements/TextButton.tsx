import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS } from "../../constants/Fonts";
import Colors from "../../constants/Colors";

interface TextButtonProps {
  buttonContainerStyle: any;
  label: string;
  labelStyle?: any;
  onPress: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({
  buttonContainerStyle,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.light.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: Colors.light.background,
          ...FONTS.h3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
