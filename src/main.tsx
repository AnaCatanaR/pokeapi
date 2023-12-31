import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./globalStyles/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <GlobalStyles />
  </>
);
