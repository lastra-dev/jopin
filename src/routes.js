import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";
import SettingsScreen from "./screens/SettingsScreen";

export const AppRoutes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/AddScreen" element={<AddScreen />} />
        <Route path="/SettingsScreen" element={<SettingsScreen />} />
      </Routes>
    </MemoryRouter>
  );
};
