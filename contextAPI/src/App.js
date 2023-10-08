import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Template from "./components/Template";
import { SectionProvier } from "./context/Section";

function App() {
  return (
    <SectionProvier>
      <Template>
        <Header />
        <Outlet />
      </Template>
    </SectionProvier>
  );
}

export default App;
