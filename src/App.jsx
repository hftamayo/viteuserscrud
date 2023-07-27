import React from "react";
import UserList from "./features/users/UserList";
import { Route, Routes } from "react-router-dom";
import AddUSer from "./features/users/AddUSer";
import EditUser from "./features/users/EditUser";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        User's CRUD
      </h1>
      <Routes>
        <Route path="/view-users" element={<UserList />} />
        <Route path="/add-user" element={<AddUSer />} />     
        <Route path="/edit-user/:id" element={<EditUser />} />   
      </Routes>
    </div>
  );
}

export default App;
