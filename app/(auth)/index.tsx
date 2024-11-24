import React from "react";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../../styles/auth";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  const handleLogin = () => {
    console.log("Pressed => Entrar");
    router.push("/(home)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionLogoHero}>
        <Text>Logo</Text>
      </View>

      <View style={styles.sectionHorizontal}>
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
      </View>

      <View style={styles.pairActionButtons}>
        <Link href="/(auth)/register">
          <Button mode="text">Criar nova conta</Button>
        </Link>

        <Link href="/(auth)/forgot-password">
          <Button mode="text">Esqueceu a senha?</Button>
        </Link>
      </View>

      <View style={styles.sectionHorizontal}>
        <Button
          icon="login"
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={handleLogin}
        >
          Entrar
        </Button>

        <Text style={{ alignSelf: "center", paddingVertical: 14 }}>Ou</Text>

        <Button
          icon="google"
          mode="contained"
          buttonColor="#DE4848"
          onPress={() => console.log("Pressed => Esqueceu a senha?")}
          contentStyle={{ flexDirection: "row-reverse" }}
        >
          Usar conta do Google
        </Button>
      </View>
    </View>
  );
}
