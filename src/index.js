import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./assets/users/users/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./assets/users/users/profilePage";
import MasterLayout from "./pages/users/theme/masterLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MasterLayout>
              <HomePage />
            </MasterLayout>
          }
        />
        <Route path="/user" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
