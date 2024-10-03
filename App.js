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
import FocusedHistory from "./src/components/FocusedHistory";

export default function App() {
  const [currenSuject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusbar style="light" />
      {!currenSuject ? (
        <>
          <Focus addCurrentSubject={setCurrentSubject} />
          <FocusedHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currenSuject}
          onTimeEnd={(subject) => setHistory([...history, subject])}
          clearSubject={() => setCurrentSubject(null)}
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
