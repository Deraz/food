import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantCard = ({item}) => {
  return (
    <View style={styles.card}>
        <Image style ={styles.image} source = {{uri: item.image_url}}/>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.additionalInfo}>{`${item.rating} Stars - ${item.review_count} Reviews`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    height: 170,
    width: 200,
    marginLeft: 10,
  },
  image: {
      width:200,
      height: 120,
      borderRadius:5,
      marginBottom:3
  },
  name: {
      fontWeight:'bold',
  },
  additionalInfo: {
      color:'#555',
      fontSize:12
  }
});

export default RestaurantCard;
