import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import RestaurantCard from "./RestaurantCard";
import { withNavigation } from "react-navigation";

const ResultsList = ({ header, data, navigation }) => {
  return data.length === 0 ? null : (
    <View style={styles.listBox}>
      <Text style={styles.title}>{`${header} (${data.length})`}</Text>
      <FlatList
        keyExtractor={(result) => result.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Restaurant",{id:item.id})}>
              <RestaurantCard item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10,
  },
  listBox: {
    marginBottom: 5,
  },
});
export default withNavigation(ResultsList);
