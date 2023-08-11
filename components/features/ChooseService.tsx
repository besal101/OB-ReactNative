import React from "react";
import { FlatList, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { FONTS } from "../../constants/Fonts";
import { SIZES } from "../../constants/Sizes";
import { useJourneyCategories } from "../../services/react-query/queries/get-all-category";
import Card from "../Elements/Card";
import Skeleton from "../Elements/Skeleton";

type Props = {};

const ChooseService = (props: Props) => {
  const { data: categories, isLoading } = useJourneyCategories();

  return (
    <View
      style={{
        marginHorizontal: SIZES.base * 2,
        marginTop: SIZES.padding,
      }}
    >
      <Text style={{ ...FONTS.h3 }}>Choose Service</Text>

      {isLoading ? (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Skeleton width={70} height={70} variant="circle" />
          <Skeleton width={70} height={70} variant="circle" />
          <Skeleton width={70} height={70} variant="circle" />
          <Skeleton width={70} height={70} variant="circle" />
          <Skeleton width={70} height={70} variant="circle" />
        </View>
      ) : (
        <FlatList
          data={categories.Data}
          keyExtractor={(item) => `${item.ID}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <Card
                image={item.ImgUrl}
                index={index}
                name={item.Name}
                type="external"
                bgColor={Colors.light.background}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default ChooseService;
