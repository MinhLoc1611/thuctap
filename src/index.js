import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { unstable_HistoryRouter as HistoryBrowser} from "react-router-dom";
import { store } from "./redux/configStore";
import { history } from "./config/sever";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryBrowser history={history}>
      <App />
    </HistoryBrowser>
  </Provider>
);
