import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTask, updateTask } from "./action";

const initialState = {
    taskList : [] ,
    status: "",
    error: null
}

export const List = createSlice({
    name: "list",
    initialState,
    reducers: {
        changePosition: (state, action) => {
            state.taskList = [...action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTask.fulfilled, (state, action) => {
          state.taskList = [...action.payload];
        });
      },
})

export const { changePosition } = List.actions
export default List.reducer
export const taskListSelector = (state) => state.list;