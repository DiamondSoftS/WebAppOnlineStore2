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
    domain="ascysa.us.auth0.com"
    clientId="Cbvi8o58OvcJ7gbMP35h84Ar5GzBwI1j"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Router>
      <App />
    </Router>
    </Auth0Provider>
  </Provider>

);
