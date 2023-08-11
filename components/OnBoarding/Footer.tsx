import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import Dots from "./Dots";
import { SIZES } from "../../constants/Sizes";
import TextButton from "../Elements/TextButton";
import Colors from "../../constants/Colors";
import onboarding_screens from "../../constants/constants";
import { useNavigation } from "expo-router";

interface FooterProps {
  scrollX: any;
  flatListRef: any;
  currentIndex: number;
}

const Footer: React.FC<FooterProps> = ({
  scrollX,
  flatListRef,
  currentIndex,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 160,
      }}
    >
      {/* Pagination */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Dots scrollX={scrollX} />
      </View>
      {currentIndex < onboarding_screens.length - 1 && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
          }}
        >
          <TextButton
            label="Skip"
            onPress={() => navigation.navigate("(tabs)" as never)}
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: Colors.light.primary,
            }}
          />
          <TextButton
            label="Next"
            onPress={() => {
              let index = Math.ceil(Number(scrollX._value) / SIZES.width);
              if (index < onboarding_screens.length - 1) {
                flatListRef?.current?.scrollToIndex({
                  index: index + 1,
                  animated: true,
                });
              } else {
                navigation.navigate("(tabs)" as never);
              }
            }}
            buttonContainerStyle={{
              height: 60,
              width: 200,
              borderRadius: SIZES.radius,
            }}
          />
        </View>
      )}
      {currentIndex === onboarding_screens.length - 1 && (
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
          }}
        >
          <TextButton
            label="Let's Get Started"
            buttonContainerStyle={{
              height: 60,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.navigate("(tabs)" as never)}
          />
        </View>
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
