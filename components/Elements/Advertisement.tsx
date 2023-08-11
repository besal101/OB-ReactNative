import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SIZES } from "../../constants/Sizes";

interface AdvertisementProps {
  source: any;
  onPress: () => void;
}

const Advertisement: React.FC<AdvertisementProps> = ({ source, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.base * 2,
        flex: 1,
        width: SIZES.width * 0.9,
        height: 250,
      }}
    >
      <Image
        source={source}
        style={{
          width: SIZES.width * 0.9,
          height: SIZES.height,
          resizeMode: "contain",
        }}
      />
    </TouchableOpacity>
  );
};

export default Advertisement;

const styles = StyleSheet.create({});
