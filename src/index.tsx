import { render } from "react-dom";
import Counter from "./Components/Counter";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./Theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
