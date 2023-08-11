import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {};

const _layout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
