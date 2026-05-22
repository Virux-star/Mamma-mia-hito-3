import headerImg from "../assets/Header.jpg";

const Header = () => {
  return (
    <header
      className="rounded-4 overflow-hidden shadow"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.55)
          ),
          url(${headerImg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "520px",
      }}
    >
      <div
        className="h-100 d-flex flex-column justify-content-center align-items-center text-white text-center px-3"
      >
        <h1 className="display-3 fw-bold">
          ¡Pizzería Mamma Mia!
        </h1>

        <hr
          className="w-50 border border-light opacity-100"
        />

        <p className="fs-4">
          Tenemos las mejores pizzas del mundo 🍕
        </p>
      </div>
    </header>
  );
};

export default Header;