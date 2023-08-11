import { ScrollView, View } from "react-native";

import Header from "../../components/UI/Header";
import ChooseService from "../../components/features/ChooseService";
import FindService from "../../components/features/FindService";
import Recommended from "../../components/features/Recommended";
import Advertisement from "../../components/Elements/Advertisement";

export default function Home() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingBottom: 130,
        }}
      >
        <Header />
        <FindService />
        <ChooseService />
        <Recommended />
        <Advertisement
          source={require("../../assets/images/advertisement.png")}
          onPress={() => console.log("")}
        />
      </View>
    </ScrollView>
  );
}
