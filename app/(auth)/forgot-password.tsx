import React from "react";
import { Link, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../../styles/auth";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = React.useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.sectionLogoHero}>
        <Text> Esqueceu a senha? </Text>
      </View>

      <View style={styles.sectionHorizontal}>
        <Text style={{ textAlign: "center", fontSize: 16, margin: 12 }}>
          Digite o e-mail associado à sua conta abaixo para recuperar a senha
        </Text>

        <TextInput
          mode="outlined"
          label="E-mail"
          value={email}
          onChangeText={(emailValue) => setEmail(emailValue)}
        />
      </View>

      <View style={{ ...styles.sectionHorizontal, marginTop: 22 }}>
        <Button
          icon="email"
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
        >
          Solicitar recuperação de senha
        </Button>

        <Button
          icon="arrow-left"
          mode="text"
          onPress={() => navigation.goBack()}
          style={{ marginTop: 22 }}
        >
          Voltar
        </Button>
      </View>
    </View>
  );
}
