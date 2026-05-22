import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useContext(UserContext);

  return (
    <div className="container mt-5">
      <h2>Perfil</h2>

      <p>Email: {email}</p>

      <button
        className="btn btn-dark"
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;