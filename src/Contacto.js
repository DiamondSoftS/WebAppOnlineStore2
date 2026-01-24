import { useAuth0 } from "@auth0/auth0-react";

const Registro = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
    <center>
      <h3>My Account</h3>
    </center>

      {isAuthenticated ? (
        <div>
         
          <img src={user?.picture} alt={user?.name} /> <h3>Bienvenido {user?.name}</h3>
          <button className="btn btn-danger" onClick={() => logout({ returnTo: window.location.origin })}>
            Cerrar sesión
          </button>
        
        </div>
      ) : (
        <>
        <center>
        <h3>No has iniciado sesión</h3>
        </center>
        </>
      )}
    </>
  );
};

export default Registro;
