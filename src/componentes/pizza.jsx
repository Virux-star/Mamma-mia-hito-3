import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <h1>{pizza.name}</h1>

   <img
  src={`http://localhost:5000${pizza.img}`}
  alt={pizza.name}
  className="img-fluid" 
  />

      <p className="mt-3">{pizza.desc}</p>

      <h5>Ingredientes:</h5>
      <ul>
        {pizza.ingredients.map((ing, i) => (
          <li key={i}>🍕 {ing}</li>
        ))}
      </ul>

      <h4 className="mt-3">
        Precio: ${pizza.price.toLocaleString("es-CL")}
      </h4>

      <button className="btn btn-dark mt-2">
        Añadir al carrito 🛒
      </button>
    </div>
  );
};

export default Pizza;