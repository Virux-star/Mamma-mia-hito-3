import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (form.password.length < 6) {
      alert("La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    try {
      await login(form.email, form.password);

      alert("Login exitoso 🔓");

    } catch (error) {
      console.log(error);

      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;