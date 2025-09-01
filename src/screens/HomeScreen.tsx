import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppNavigator";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNav = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNav>();

  return (
    <View style={styles.container}>
      <Button title="Ir a Tasks" onPress={() => navigation.navigate("Tasks")} />
      <Button
        title="Ir a Listado"
        onPress={() => navigation.navigate("Listado")}
      />
    </View>
  );
}

//ESTILOS PROVISIONALES EN PANTALLA 
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", gap: 10, padding: 20 },
});
