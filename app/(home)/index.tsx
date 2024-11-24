import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles/auth";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionLogoHero}>
        <Text>HOME (Maps)</Text>
      </View>
    </View>
  );
}
