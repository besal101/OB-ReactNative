import {
  StyleSheet,
  ImageBackground,
  Image,
  Animated,
  ViewToken,
  Text,
  View,
} from "react-native";
import onboarding_screens from "../../constants/constants";
import Colors from "../../constants/Colors";
import Header from "../../components/OnBoarding/Header";
import { SIZES } from "../../constants/Sizes";
import { FONTS } from "../../constants/Fonts";
import Footer from "../../components/OnBoarding/Footer";
import React, { useRef, useState } from "react";

export default function OnBoardingOne() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onViewChangeRef = useRef(
    ({
      viewableItems,
    }: {
      viewableItems: ViewToken[];
      changed: ViewToken[];
    }) => {
      return setCurrentIndex(viewableItems[0].index as number);
    }
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light.background,
      }}
    >
      <Header />
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        onViewableItemsChanged={onViewChangeRef.current}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}
            >
              {/* HERO SECTION */}
              <View
                style={{
                  flex: 3,
                }}
              >
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: index === 1 ? "86%" : "100%",
                    width: "100%",
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 1.2,
                      height: SIZES.width * 1.2,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>

              {/* DETAIL SECTION */}
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: "center",
                    color: Colors.light.text,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Footer
        scrollX={scrollX}
        flatListRef={flatListRef}
        currentIndex={currentIndex}
      />
    </View>
  );
}
