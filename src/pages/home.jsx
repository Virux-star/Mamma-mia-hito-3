import { useEffect, useState } from "react";
import CardPizza from "../componentes/CardPizza";
import Header from "../componentes/Header";
import { pizzas as pizzasData } from "../data/pizzas";

const normalizeImg = (img) => {
  if (!img) return img;
  if (img.startsWith("http")) {
    try {
      return new URL(img).pathname.replace(/^\/Mamma-mia-hito-3/, "");
    } catch {
      return img;
    }
  }
  return img.replace(/^\/Mamma-mia-hito-3/, "");
};

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) =>
        setPizzas(
          data.map((pizza) => ({
            ...pizza,
            img: normalizeImg(pizza.img),
          }))
        )
      )
      .catch(() => setPizzas(pizzasData));
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