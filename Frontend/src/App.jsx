import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/create" element={<CreateBook />}></Route>
        <Route path="/books/details/:id" element={<ShowBook />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
        <Route path="/books/edit/:id" element={<EditBook />}></Route>
      </Routes>
    </div>
  );
};

export default App;
