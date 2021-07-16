import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errorMessage, searchYelp] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onEditCompletion={() => searchYelp(term)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList header="Cost Effective" data={filterResultsByPrice("$")} />
        <ResultsList header="Bit Pricier" data={filterResultsByPrice("$$")} />
        <ResultsList header="Big Spender" data={filterResultsByPrice("$$$")} />
        <ResultsList
          header="Wallet! Sad."
          data={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
