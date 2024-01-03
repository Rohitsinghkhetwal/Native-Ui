import { View, Text, StyleSheet} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from 'react'

const SaveScreen = () => {
  return (
    <SafeAreaProvider style={styles.mainContainer}>
      <Text style={styles.subHeader}>Thank You !</Text>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subHeader: {
    fontSize: 25,
    fontWeight: "700",
    color: "#696969"
  }
});

export default SaveScreen