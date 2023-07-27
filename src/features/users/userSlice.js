import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Sebastian Fernandez", email: "sebastic@chivo.com" },
  { id: "2", name: "Lupita Fernandez", email: "lupita@chivo.com" },
  { id: "3", name: "Milu Martinez", email: "milu@chivo.com" },
  { id: "4", name: "Herbert Fernandez", email: "herbert@chivo.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
