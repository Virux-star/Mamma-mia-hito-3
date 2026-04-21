import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";
import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/registro";
import Cart from "./componentes/carrito";
import Pizza from "./componentes/pizza"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="container my-4 flex-grow-1">
        { /* <Home /> */ }
        {<Pizza />}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Cart /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;