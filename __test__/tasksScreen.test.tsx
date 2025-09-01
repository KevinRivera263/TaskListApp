import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../src/store";
import TasksScreen from "../src/screens/TasksScreen";

// MUESTRA DE TITULO
describe("TasksScreen", () => {
  it("Mis Tasks", () => {
    const { getByText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );
    //aqui 
    expect(getByText("Mis Tasks")).toBeTruthy();
  });

  it("Debe permitir agregar un nuevo task", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    //  Abrir el modal
    fireEvent.press(getByText("Agregar nuevo task"));

    //  Escribir en el input
    const input = getByPlaceholderText("Escribe la descripción");
    fireEvent.changeText(input, "Aprender test");

    //  Guardar el nuevo task
    fireEvent.press(getByText("Guardar"));

    //  Verificar que aparece en la lista
    expect(getByText("- Aprender test")).toBeTruthy();
  });

  //revisar.
  it("No debe permitir agregar un task vacío", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    // Abrir el modal
    fireEvent.press(getByText("Agregar nuevo task"));

    // Escribir espacios en blanco
    const input = getByPlaceholderText("Escribe la descripción");
    fireEvent.changeText(input, "   ");

    // Guardar
    fireEvent.press(getByText("Guardar"));

    // Validar que no aparece en la lista
    expect(queryByText("-    ")).toBeNull();
  });
});
//PASS 1:55 pm 1/09/2025