import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilterScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Filter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FilterScreen;
