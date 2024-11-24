import React from "react";
import { Link, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../../styles/auth";

export default function RegisterScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.sectionLogoHero}>
        <Text>Register</Text>
      </View>

      <View style={styles.sectionHorizontal}>
        <Text style={{ textAlign: "center", fontSize: 16, margin: 12 }}>
          Criar nova conta
        </Text>

        <TextInput
          mode="outlined"
          label="E-mail"
          value={email}
          onChangeText={(emailValue) => setEmail(emailValue)}
        />

        <TextInput
          mode="outlined"
          label="Senha"
          value={password}
          onChangeText={(passwordValue) => setPassword(passwordValue)}
          secureTextEntry={true}
        />

        <TextInput
          mode="outlined"
          label="Confirmar Senha"
          value={confirmPassword}
          onChangeText={(confirmPasswordValue) =>
            setConfirmPassword(confirmPasswordValue)
          }
          secureTextEntry={true}
        />
      </View>

      <View style={{ ...styles.sectionHorizontal, marginTop: 22 }}>
        <Button
          icon="account-plus"
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
        >
          Criar nova conta
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
