import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <>
     <AuthProvider>
     
        {/* Header must be inside BrowserRouter */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer/>
      
    </AuthProvider>
    </>
  );
}

export default App;
