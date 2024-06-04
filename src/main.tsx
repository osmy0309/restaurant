import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

const container = document.getElementById("root")!;
const root = createRoot(container)
root.render(
	<Provider store={store}>
    {/*Notifications*/}
      <App />
  </Provider>
);
