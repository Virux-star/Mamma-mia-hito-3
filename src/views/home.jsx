import Header from "../componentes/header";
import CardPizza from "../componentes/CardPizza";
import napolitana from "../assets/Para-la-masa-de-pizza-napolitana-8-hrs-fermentacion-Web-1-500x500.jpg";
import española from "../assets/images (1).jpg";
import pepperoni from "../assets/pizza-con-salami-chorizo-beacon.jpg";

const Home = () => {
  return (
    <div>
      <Header />

      <div style={{ display: "flex", gap: "20px", padding: "40px 20px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img={napolitana}
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img={española}
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img={pepperoni}
        />
      </div>
    </div>
  );
};

export default Home;