import Item from "./components/ConditionalRendering";

function App() {
  return (
    <ul>
      <Item name="Space suit" isPacked={false} />
      <Item name="Helmet with a golden leaf" isPacked={true} />
      <Item name="Photo of Tam" isPacked={true} />
    </ul>
  );
}

export default App;
