import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from "react-native";
import axios from "axios";

interface Element {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  username?: string;
  email?: string;
}

export default function ListadoScreen() {
  const [data, setData] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6172cfe5110a740017222e2b.mockapi.io/elements")
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

    //LOADING
  if (loading) {
    return <ActivityIndicator testID="loading-indicator" size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Imagen del usuario
            NOTA: Comprobé que la URL de imagen devuelve un 404. No existe el recurso como tal. 
            */}
            <Image source={{ uri: item.avatar }} style={styles.avatar} />

            {/* Info */}
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name || "Sin nombre"}</Text>
              <Text style={styles.meta}> 📅 {new Date(item.createdAt).toLocaleDateString()}</Text>
              {item.email && <Text style={styles.meta}> ✉️ {item.email}</Text>}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // sombra en Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  meta: { fontSize: 12, color: "#666" },
});
