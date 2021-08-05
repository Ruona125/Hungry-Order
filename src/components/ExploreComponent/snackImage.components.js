import React from "react";
import { View, Image, ScrollView } from "react-native";

import FirstCat from "../../../images/categories-1.png";
import SecondCat from "../../../images/categories-2.png";
import ThirdCat from "../../../images/categories-3.png";
import FourthCat from "../../../images/categories-4.png";
import FifthCat from "../../../images/categories-5.png";

export const SnackImage = () => {
  return (
    <ScrollView horizontal={true}>
      <Image style={{ margin: 10 }} source={FirstCat} />
      <Image style={{ margin: 10 }} source={SecondCat} />
      <Image style={{ margin: 10 }} source={ThirdCat} />
      <Image style={{ margin: 10 }} source={FourthCat} />
      <Image style={{ margin: 10 }} source={FifthCat} />
    </ScrollView>
  );
};
