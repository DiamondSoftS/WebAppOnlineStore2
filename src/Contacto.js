import { useAuth0 } from "@auth0/auth0-react";

const Registro = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
      <h2>Mi cuenta</h2>

      {isAuthenticated ? (
        <div>
          <h2>Bienvenido {user?.name}</h2>
          <img src={user?.picture} alt={user?.name} />
        </div>
      ) : (
        <h2>No has iniciado sesión</h2>
      )}
    </>
  );
};

export default Registro;
