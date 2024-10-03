import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { RoundedButton } from "./RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/size";

const Focus = ({ addCurrentSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on ?"
          onChangeText={setSubject}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addCurrentSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {},
  textInput: {
    flex: 0.8,
    marginRight: spacing.sm,
    fontSize: 12,
  },
  inputContainer: {
    padding: spacing.lg,
    paddingHorizontal: spacing.sm,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
