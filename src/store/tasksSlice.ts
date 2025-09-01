import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  description: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = { tasks: [] };

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      if (action.payload.trim()) {
        state.tasks.push({
          id: Date.now().toString(),
          description: action.payload,
        });
      }
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
