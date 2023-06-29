import { useState } from "react";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ChatRoom from "./pages/ChatRoom";
import { Routes, Route } from "react-router-dom";
import { Privateroute } from "./routes/Privateroute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/chat"
          element={
            <Privateroute>
              <ChatRoom />
            </Privateroute>
          }></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
