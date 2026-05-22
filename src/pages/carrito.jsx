import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Cart = () => {
  const { cart, increase, decrease, total } =
    useContext(CartContext);

  const { token } = useContext(UserContext);

  // 👇 CHECKOUT
  const checkout = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/checkouts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cart,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Compra realizada con éxito 🛒");

    } catch (error) {
      console.log(error);

      alert("Error al realizar la compra");
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">🛒 Carrito de compras</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex justify-content-between align-items-center border-bottom py-3"
        >
          <div className="d-flex align-items-center gap-3">
            <img
              src={pizza.img}
              alt={pizza.name}
              width="60"
            />

            <span>{pizza.name}</span>
          </div>

          <span>
            ${pizza.price.toLocaleString("es-CL")}
          </span>

          <div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decrease(pizza.id)}
            >
              -
            </button>

            <span className="mx-2">
              {pizza.count}
            </span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h4 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h4>

      <button
        className="btn btn-dark mt-2"
        disabled={!token}
        onClick={checkout}
      >
        Pagar 💳
      </button>
    </div>
  );
};

export default Cart;