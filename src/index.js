import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Auth0Provider
    domain="ascysa.us.auth0.com"
    clientId="5biS0iVJk0mYhxVHW8EYpr7K3Qum5VGG"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
    </Auth0Provider>

);
