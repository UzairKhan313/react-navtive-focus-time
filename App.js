import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";

import Timer from "./src/components/Timer";
import Focus from "./src/components/Focus";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currenSuject, addCurrentSubject] = useState("test");
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusbar style="light" />
      {!currenSuject ? (
        <Focus addCurrentSubject={addCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currenSuject}
          onTimeEnd={() => {}}
          clearSubject={() => {}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlud,
  },
});
