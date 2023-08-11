import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import Colors from "../../constants/Colors";
import { SIZES } from "../../constants/Sizes";

interface SkeletonProps {
  width: number;
  height: number;
  variant?: "circle" | "box";
}

const Skeleton: React.FC<SkeletonProps> = ({ height, width, variant }) => {
  const opacity = useRef(new Animated.Value(0.3));

  let borderRadius = 0;
  if (variant === "circle") {
    borderRadius = height / 2;
  } else {
    borderRadius = SIZES.radius;
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 0.8,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        { opacity: opacity.current, height, width, borderRadius },
        styles.skeleton,
      ]}
    />
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "gray",
  },
});
