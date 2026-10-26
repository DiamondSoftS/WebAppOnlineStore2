import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(   
  <Provider store={store}>
   <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      connection: 'ASCYSA-Subscripciones',
    }}
  >
    <Router>
      <App />
    </Router>
    </Auth0Provider>
  </Provider>

);
