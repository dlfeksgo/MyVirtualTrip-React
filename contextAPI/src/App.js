import CheckList from "./components/CheckList/CheckList";
import Header from "./components/Header/Header";
import Template from "./components/Template";
import { SectionProvier } from "./context/Section";

function App() {
  return (
    <SectionProvier>
      <Template>
        <Header />
        <CheckList />
      </Template>
    </SectionProvier>
  );
}

export default App;
