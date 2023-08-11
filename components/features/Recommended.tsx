import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants/Sizes";
import { FONTS } from "../../constants/Fonts";
import { useFetchProducts } from "../../services/react-query/queries/get-all-product";
import Colors from "../../constants/Colors";
import BannerCard from "../Elements/BannerCard";
import Skeleton from "../Elements/Skeleton";

type Props = {};

const Recommended = (props: Props) => {
  const { data: products, isLoading, isSuccess } = useFetchProducts();
  return (
    <View
      style={{
        marginHorizontal: SIZES.base * 2,
        marginTop: SIZES.padding,
        flex: 1,
      }}
    >
      <Text style={{ ...FONTS.h3 }}>Recommended for you</Text>

      {isLoading ? (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Skeleton width={170} height={200} variant="box" />
          <Skeleton width={170} height={200} variant="box" />
          <Skeleton width={170} height={200} variant="box" />
          <Skeleton width={170} height={200} variant="box" />
          <Skeleton width={170} height={200} variant="box" />
        </View>
      ) : (
        <FlatList
          data={products.Data.VariantItems}
          keyExtractor={(item) => `${item.Id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <BannerCard image={item.ImgUrl} name={item.Name} />;
          }}
        />
      )}
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({});
