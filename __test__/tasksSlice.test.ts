import tasksReducer, { addTask } from "../src/store/tasksSlice";

describe("tasksSlice", () => {
  it("Agregar un task valido", () => {
    const initialState = { tasks: [] };

    const action = addTask("Titulo de la primera");
    const newState = tasksReducer(initialState, action);

    expect(newState.tasks.length).toBe(1);
    expect(newState.tasks[0].description).toBe("Titulo de la primera");
  });

  it("No se agrega un task en blanco", () => {
    const initialState = { tasks: [] };

    const action = addTask("   "); // Si solo son espacios
    const newState = tasksReducer(initialState, action);

    expect(newState.tasks.length).toBe(0);
  });
});
