import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { SIZES } from "../../constants/Sizes";
import { FONTS } from "../../constants/Fonts";

interface CardProps {
  image: any;
  index: number;
  name: string;
  type: "internal" | "external";
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ image, index, name, type, bgColor }) => {
  return (
    <View style={{ flexDirection: "column", gap: 6 }}>
      <TouchableOpacity
        onPress={() => console.log("pressed")}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: bgColor,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: SIZES.padding,
          marginRight: SIZES.base * 1.6,
          marginTop: SIZES.base,
        }}
      >
        {type === "internal" ? (
          <Image
            source={image}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        ) : (
          <Image
            source={{
              uri: image,
            }}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        )}
      </TouchableOpacity>
      <Text
        style={{
          color: Colors.light.text,
          ...FONTS.body4,
          textAlign: "center",
          width: 80,
        }}
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
