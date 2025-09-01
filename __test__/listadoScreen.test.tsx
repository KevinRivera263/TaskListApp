import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import axios from "axios";
import ListadoScreen from "../src/screens/ListadoScreen";

// Mock de axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ListadoScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Por defecto, axios devuelve un array vacio
    mockedAxios.get.mockResolvedValue({ data: [] });
  });

  it("Debe mostrar el ActivityIndicator mientras carga", () => {
    const { getByTestId } = render(<ListadoScreen />);
    expect(getByTestId("loading-indicator")).toBeTruthy();
  });

  it("Debe mostrar datos después de cargar", async () => {
    // Simulamos respuesta de la API
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          id: "1",
          name: "Usuario Test",
          avatar: "",
          createdAt: "",
        },
      ],
    });

    const { getByText, queryByTestId } = render(<ListadoScreen />);

    // Esperamos a que desaparezca el loader
    await waitFor(() => {
      expect(queryByTestId("loading-indicator")).toBeNull();
    });

    // Esperamos a que aparezca el usuario mockeado
    await waitFor(() => {
      expect(getByText("Usuario Test")).toBeTruthy();
    });
  });
});
