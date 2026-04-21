import { useEffect, useState } from "react";
import CardPizza from "../componentes/CardPizza";
import Header from "../componentes/Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-sm-6 col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={`http://localhost:5000${pizza.img}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;