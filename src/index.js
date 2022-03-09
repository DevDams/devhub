import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/font-style.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import Background from "./components/Background/index";
import Toggle from "./components/ThemeToggle/index";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
