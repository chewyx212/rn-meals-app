import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoriesScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
