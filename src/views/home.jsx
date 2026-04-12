import { pizzas } from "../componentes/pizzas";
import CardPizza from "../componentes/CardPizza";
import Header from "../componentes/Header";

const Home = () => {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "40px 20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;