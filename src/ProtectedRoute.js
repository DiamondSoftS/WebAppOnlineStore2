
import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <p>Verificando sesión...</p>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        <center>
          <br/>
          <br/>
        <h3>Debes iniciar sesión para acceder.</h3>
         <br/> 
        <button className="btn btn-danger" onClick={() => loginWithRedirect()}>
          Iniciar sesión
        </button>
        </center>
      </div>
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;
