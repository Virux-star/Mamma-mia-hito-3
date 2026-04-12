import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // ➕ Aumentar cantidad
  const aumentar = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  // ➖ Disminuir cantidad
  const disminuir = (id) => {
    setCart(
      cart
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0) // elimina si queda en 0
    );
  };

  // 💰 Calcular total
  const total = cart.reduce(
    (acc, p) => acc + p.price * p.count,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Carrito de compras</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={pizza.img} alt={pizza.name} width="60" />
            <p>{pizza.name}</p>
          </div>

          <p>${pizza.price.toLocaleString("es-CL")}</p>

          <div>
            <button onClick={() => disminuir(pizza.id)}>➖</button>
            <span style={{ margin: "0 10px" }}>{pizza.count}</span>
            <button onClick={() => aumentar(pizza.id)}>➕</button>
          </div>
        </div>
      ))}

      <h3 style={{ marginTop: "20px" }}>
        Total: ${total.toLocaleString("es-CL")}
      </h3>

      <button style={{ marginTop: "10px" }}>Pagar 💳</button>
    </div>
  );
};

export default Cart;