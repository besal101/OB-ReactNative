import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SIZES } from "../../constants/Sizes";

type Props = {};

const Header = (props: Props) => {
  return (
    <View
      style={{
        position: "absolute",
        top: SIZES.height > 800 ? 50 : 25,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        resizeMode="contain"
        style={{ width: SIZES.width * 0.4, height: 80 }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
