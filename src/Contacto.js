import { useAuth0 } from "@auth0/auth0-react";

const Registro = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
    <center>
      <h3>My Account</h3>
    </center>

      {isAuthenticated ? (
        <div>
         
          <img src={user?.picture} alt={user?.name} /> <h3>Bienvenido {user?.name}</h3>
        </div>
      ) : (
        <h2>No has iniciado sesión</h2>
      )}
    </>
  );
};

export default Registro;
