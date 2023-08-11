import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image, TouchableOpacity } from "react-native";
import { SIZES } from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import { FONTS } from "../../constants/Fonts";

type Props = {};

const FindService = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => console.log("pressed")}>
      <LinearGradient
        colors={["#331A06", "#0E315D"]}
        start={{ x: 0, y: 0 }} // Start from top left
        end={{ x: 1, y: 1 }} // End at bottom right
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.base * 2,
          paddingVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: Colors.light.gray,
          ...styles.shadow,
        }}
      >
        <Image source={require("../../assets/images/map.png")} />
        <View
          style={{
            marginLeft: SIZES.radius,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: Colors.light.gray,
              ...FONTS.body3,
              flexWrap: "wrap",
            }}
          >
            Find your ideal car workshop
          </Text>
        </View>
        <Image
          source={require("../../assets/images/arrow.png")}
          width={22}
          height={22}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FindService;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
