import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/registro";
import Cart from "./pages/carrito";
import Pizza from "./pages/pizza";
import Profile from "./pages/profile";
import NotFound from "./pages/notfound";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;