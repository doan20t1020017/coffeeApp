import React from "react";
import HomePage from "./assets/users/users/homePage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MasterLayout />}>
          <Route path="/">
            <Route index element={<HomePage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Route>
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
