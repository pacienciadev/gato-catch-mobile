import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles/auth";

export default function ComplaintsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionLogoHero}>
        <Text>Denúncias</Text>
      </View>
    </View>
  );
}
