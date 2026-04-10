import headerImg from "../assets/Header.jpg";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas del mundo</p>
      </div>
    </header>
  );
};

export default Header;