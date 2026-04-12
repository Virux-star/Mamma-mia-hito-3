import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";
import Home from "./views/home";
//import Register from "./views/registro";
//import Login from "./views/login";
import Cart from "./componentes/carrito";

function App() {
  return (
    <>
      <Navbar />

      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      { <Cart /> }

      <Footer />
    </>
  );
}

export default App;