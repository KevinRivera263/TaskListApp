import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TasksScreen from "./screens/TasksScreen";
import ListadoScreen from "./screens/ListadoScreen";

export type RootStackParamList = {
  Home: undefined;
  Tasks: undefined;
  Listado: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={TasksScreen} />
        <Stack.Screen name="Listado" component={ListadoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
