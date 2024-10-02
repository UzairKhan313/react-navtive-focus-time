import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Countdown } from "./CountDown";
import { RoundedButton } from "./RoundedButton";

const Timer = ({ focusSubject, onTimeEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.contDown}>
        <Countdown
          onProgress={() => {}}
          isPaused={!isStarted}
          onEnd={() => {}}
        />
      </View>
      <View style={styles.buttonContainer}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  contDown: { flex: 0.5, alignItems: "center", justifyContent: "center" },
  buttonContainer: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
