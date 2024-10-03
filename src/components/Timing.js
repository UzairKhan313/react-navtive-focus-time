import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "./RoundedButton";

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.container}>
        <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.container}>
        <RoundedButton title="15" size={75} onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.container}>
        <RoundedButton title="20" size={75} onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

export default Timing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
