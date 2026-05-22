import { useEffect, useState } from "react";
import CardPizza from "../componentes/CardPizza";
import Header from "../componentes/Header";
import { pizzas as pizzasData } from "../data/pizzas";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const normalizeImg = (img) => {
  if (!img) return img;

  if (img.startsWith("http")) return img;

  const trimmed = img.replace(/^\/+/, "");
  return `${API_URL}/${trimmed}`;
};

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/pizzas`)
      .then((res) => res.json())
      .then((data) =>
        setPizzas(
          data.map((pizza) => ({
            ...pizza,
            img: normalizeImg(pizza.img),
          }))
        )
      )
      .catch(() =>
        setPizzas(
          pizzasData.map((pizza) => ({
            ...pizza,
            img: normalizeImg(pizza.img),
          }))
        )
      );
  }, []);

  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-sm-6 col-md-4" key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;