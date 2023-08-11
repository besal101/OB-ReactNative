import React from "react";
import { Animated, View } from "react-native";
import Colors from "../../constants/Colors";
import { SIZES } from "../../constants/Sizes";
import onboarding_screens from "../../constants/constants";

interface DotsProps {
  scrollX: Animated.Value;
}

const Dots: React.FC<DotsProps> = ({ scrollX }) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {onboarding_screens.map((item, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [
            Colors.light.primary,
            Colors.light.primary,
            Colors.light.primary,
          ],
          extrapolate: "clamp",
        });
        const dotWidth = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              backgroundColor: dotColor,
              marginHorizontal: 6,
              width: dotWidth,
              height: 8,
            }}
          />
        );
      })}
    </View>
  );
};

export default Dots;
