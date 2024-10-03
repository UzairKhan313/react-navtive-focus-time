import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/size";

const FocusedHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.noHistory}>We haven't focused anything yet.</Text>
    );

  const renderItem = ({ item }) => {
    return <Text style={styles.item}>- {item}</Text>;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thing's we focused on :</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};

export default FocusedHistory;

const styles = StyleSheet.create({
  container: { padding: spacing.md, flex: 1 },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  noHistory: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
    paddingLeft: spacing.md,
  },
});
