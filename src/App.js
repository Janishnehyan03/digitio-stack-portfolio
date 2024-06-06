import Home from "./components/Home";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();
export default function App() {
  return <Home />;
}
