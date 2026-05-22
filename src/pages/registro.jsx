import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const { register } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (form.password.length < 6) {
      alert("La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await register(form.email, form.password);

      alert("Registro exitoso 🎉");

    } catch (error) {
      console.log(error);

      alert("Error al registrarse");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registro</h2>

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

        <input
          className="form-control mb-2"
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button className="btn btn-success w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;