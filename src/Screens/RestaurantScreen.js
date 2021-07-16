import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, FlatList } from "react-native";
import yelp from "../api/yelp";

const RestaurantScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (passedId) => {
    const res = await yelp.get(`/${passedId}`);
    setResult(res.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return !result ? null : (
      <FlatList
        keyExtractor={(result) => result}
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 250,
    marginBottom: 3,
  },
});

export default RestaurantScreen;
