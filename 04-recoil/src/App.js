import CheckList from "./components/CheckList/CheckList";
import Header from "./components/Header/Header";
import Template from "./components/Template";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Template>
        <Header />
        <CheckList />
      </Template>
    </RecoilRoot>
  );
}

export default App;
