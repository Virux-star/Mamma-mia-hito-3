const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav style={{ padding: "10px", background: "#222", color: "white" }}>
      <button>🍕 Home</button>

      {token ? (
        <>
          <button>🔓 Profile</button>
          <button>🔒 Logout</button>
        </>
      ) : (
        <>
          <button>🔐 Login</button>
          <button>🔐 Register</button>
        </>
      )}

      <button style={{ float: "right" }}>
        🛒 Total: ${total.toLocaleString("es-CL")}
      </button>
    </nav>
  );
};

export default Navbar;