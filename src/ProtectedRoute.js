
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
        <p>Debes iniciar sesión para acceder.</p>
        <button onClick={() => loginWithRedirect()}>
          Iniciar sesión
        </button>
      </div>
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;
