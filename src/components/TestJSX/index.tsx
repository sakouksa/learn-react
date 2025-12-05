const name = "ReactJS";
const GreetingTitle = "This is ReactJS Title";
//Const myobject = {title: "ReactJS Title"}; --- IGNORE ---
interface myobject {
  id: number;
  name: string;
  position?: string;
}
const myobject: myobject = {
  id: 1,
  name: "sakousa",
  position: "Developer",
};
function TestJSX() {
  return (
    <>
      <h1>
        Hello {name} {1 + 2}
      </h1>
      <h1 title={GreetingTitle}>Hello Javascript</h1>
      <ul>
        {" "}
        <h1>Object Values:</h1>
        <li> ID: {myobject["id"]}</li>
        <li> Name: {myobject["name"].toUpperCase()}</li>
        <li> Position: {myobject["position"]?.toLowerCase()}</li>
      </ul>
    </>
  );
}
export default TestJSX;
