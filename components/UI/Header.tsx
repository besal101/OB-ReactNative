import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SIZES } from "../../constants/Sizes";
import { FONTS } from "../../constants/Fonts";
import { Feather } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import Colors from "../../constants/Colors";
import { car_types } from "../../constants/constants";
import Card from "../Elements/Card";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 290,
        ...styles.shadow,
      }}
    >
      <ImageBackground
        source={require("../../assets/images/header_background.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          height: "70%",
          alignItems: "center",
        }}
      >
        {/* Main Tab */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding * 2,
            width: "100%",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.padding,
            ...styles.shadow,
          }}
        >
          <View style={{ flexDirection: "column", gap: 4, flex: 1 }}>
            <Text style={{ color: "white", ...FONTS.body3 }}>Location</Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Feather name="map-pin" size={20} color="white" />
              <Text style={{ color: "white", ...FONTS.body4 }}>
                Deira City Center
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => console.log("Pressed")}>
            <Image
              source={require("../../assets/images/user.png")}
              resizeMode="contain"
              style={{
                flex: 1,
              }}
              height={40}
              width={40}
            />
          </TouchableOpacity>
        </View>
        {/* Main Bar  */}

        <View
          style={{
            position: "absolute",
            bottom: "-20%",
            backgroundColor: "white",
            borderRadius: 15,
            width: "92%",
            paddingBottom: SIZES.radius,
            ...styles.shadow,
          }}
        >
          <SearchBar />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.base * 1.6,
            }}
          >
            <Text style={{ color: Colors.light.text, ...FONTS.body3 }}>
              Choose Car
            </Text>
            <TouchableOpacity onPress={() => console.log("Pressed")}>
              <Text style={{ color: Colors.light.primary, ...FONTS.body3 }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: SIZES.base }}
            data={car_types}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Card
                  image={item.image}
                  index={index}
                  name={item.name}
                  type="internal"
                  bgColor={Colors.light.gray}
                />
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.65,

    elevation: 8,
  },
});
