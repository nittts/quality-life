import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App";
import Global from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Global />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
