import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import AddScreen from "./screens/AddScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import VerificationScreen from "./screens/VerificationScreen";

export const AppRoutes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/AddScreen" element={<AddScreen />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
        <Route path="/SignUpScreen" element={<SignUpScreen />} />
        <Route path="/SettingsScreen" element={<SettingsScreen />} />
        <Route path="/VerificationScreen" element={<VerificationScreen />} />
      </Routes>
    </MemoryRouter>
  );
};
