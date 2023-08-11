import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SIZES } from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import { FONTS } from "../../constants/Fonts";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.base,
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: Colors.light.gray,
        }}
      >
        {/* Icon */}
        <Image
          source={require("../../assets/images/search.png")}
          style={{
            height: 20,
            width: 20,
            tintColor: Colors.light.tabIconDefault,
          }}
        />

        {/* Text Input */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholderTextColor={Colors.light.tabIconDefault}
          placeholder="Search any car service"
        />

        {/* Filter Button */}
        <TouchableOpacity onPress={() => console.log("Filter")}>
          <Image
            source={require("../../assets/images/filter.png")}
            style={{
              height: 20,
              width: 20,
              tintColor: Colors.light.tabIconDefault,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
