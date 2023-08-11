import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { SIZES } from "../../constants/Sizes";
import { FONTS } from "../../constants/Fonts";

interface BannerCardProps {
  image: any;
  name: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ image, name }) => {
  return (
    <View style={{ flexDirection: "column", gap: 6 }}>
      <TouchableOpacity
        onPress={() => console.log("pressed")}
        style={{
          width: SIZES.width * 0.6,
          height: SIZES.height * 0.2,
          borderRadius: SIZES.radius,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: SIZES.padding,
          marginRight: SIZES.base * 1.8,
          marginTop: SIZES.base,
        }}
      >
        <Image
          source={{
            uri: image,
          }}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.6,
            height: SIZES.height * 0.2,
            borderRadius: SIZES.radius * 2,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: Colors.light.text,
          ...FONTS.body4,
          textAlign: "left",
          paddingLeft: SIZES.base,
          width: SIZES.width * 0.6,
        }}
        numberOfLines={2}
      >
        {name}
      </Text>
    </View>
  );
};

export default BannerCard;

const styles = StyleSheet.create({});
