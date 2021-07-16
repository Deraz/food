import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onEditCompletion }) => {
  return (
    <View style={styles.bar}>
      <SimpleLineIcons name="magnifier" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Restaurant name ..."
        style={styles.textInput}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onEditCompletion()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    marginHorizontal: 10,
    backgroundColor: "#E2E2E2",
    borderRadius: 5,
    flexDirection: "row",
    paddingLeft: 20,
    marginVertical:20
  },
  textInput: {
    marginHorizontal: 15,
    fontSize: 20,
    paddingVertical: 10,
    flex: 1,
  },
  icon: {
    fontSize: 25,
    color: "black",
    alignSelf: "center",
  },
});

export default SearchBar;
