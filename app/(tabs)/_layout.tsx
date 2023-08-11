import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import { FONTS } from "../../constants/Fonts";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2f95dc",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#fff",
          borderTopColor: "transparent",
          height: 80,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/images/home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused
                    ? Colors.light.primary
                    : Colors.light.tabIconDefault,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.light.primary : Colors.light.text,
                  ...FONTS.body5,
                }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/images/services.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused
                    ? Colors.light.primary
                    : Colors.light.tabIconDefault,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.light.primary : Colors.light.text,
                  ...FONTS.body5,
                }}
              >
                Services
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/images/cart.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused
                    ? Colors.light.primary
                    : Colors.light.tabIconDefault,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.light.primary : Colors.light.text,
                  ...FONTS.body5,
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/images/profile.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 10,
                  tintColor: focused
                    ? Colors.light.primary
                    : Colors.light.tabIconDefault,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.light.primary : Colors.light.text,
                  ...FONTS.body5,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
