import { Category, Product } from "./components/Greeting";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import TestJSX from "./components/TestJSX";

function App() {
  return (
    <div>
      <Greeting />
      <Category />
      <Product />
      <Profile />
      <TestJSX />
    </div>
  );
}

export default App;
