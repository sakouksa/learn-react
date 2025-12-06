import TestProps from "./components/Props";
import MyProps2 from "./components/Props/index2";
import Article from "./components/Props/index3";
import TestProps3 from "./components/Props/index3";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Testing Props Component</h1>
      {/* <TestProps h1Description="Hello World" /> */}
      {/* <TestProps h1Description="Hello World" />
      <TestProps h1Description="Hello React" />
      <TestProps2  source="/public/images/avatar-9.png"/> */}
      <Article title={"Article 1"} />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius
      architecto eos ipsum necessitatibus deserunt earum, deleniti, odit
      voluptatum quas delectus! Optio facilis ipsa distinctio animi quos
      repellendus ad ipsam!
      <Article title={"Article 2"} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illum
      reprehenderit eius excepturi sit quia, repellat corporis vitae vero odit
      asperiores hic officia mollitia a at id minus commodi eos?
      <Article title={"Article 3"} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam
      voluptate quos itaque quisquam beatae adipisci, dolor officiis fugiat
      dolores, vero ad a tenetur eum minus quia dolorum. Labore, magnam.
    </div>
  );
}

export default App;
