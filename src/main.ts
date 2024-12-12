import "./styles/main.css";
import { renderHome } from "./pages/home";

const app: HTMLDivElement = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = renderHome();
