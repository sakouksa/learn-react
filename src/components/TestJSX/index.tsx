import "./style.css";
const name = "ReactJS";
const GreetingTitle = "This is ReactJS Title";
//Const myobject = {title: "ReactJS Title"}; --- IGNORE ---
interface myobject {
  id: number;
  name: string;
  gender?: string; // --- IGNORE ---
  address?: string;
  DB: string; // --- IGNORE ---
  phone: number; // --- IGNORE ---
  position?: string;
}
const myobject: myobject = {
  id: 1,
  name: "sakousa",
  gender: "Male", // --- IGNORE ---
  address: "Phnom Penh", // --- IGNORE ---
  DB: "MySQL", // --- IGNORE ---
  phone: 1234567890, // --- IGNORE ---
  position: "Developer",
};

function TestJSX() {
  const myInternalCss: React.CSSProperties = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
  };
  return (
    <>
      <h1>
        Hello {name} {1 + 2}
      </h1>
      <h1 title={GreetingTitle}>Hello Javascript</h1>
      <ul>
        <h1>Object Values:</h1>
        <li> ID: {myobject.id}</li>
        <li> Name: {myobject.name.toUpperCase()}</li>
        <li> Gender: {myobject.gender}</li>
        <li> Address: {myobject.address}</li>
        <li> Database: {myobject.DB}</li>
        <li> Phone: {myobject.phone}</li>
        <li> Position: {myobject.position?.toLowerCase()}</li>
      </ul>
      {/* Inline CSS */}
      <h1 style={{ backgroundColor: "yellow", color: "red", padding: "10px" }}>
        Hello CSS
      </h1>
      {/* Internal CSS */}
      <h1 style={myInternalCss}>Hello Internal CSS</h1>
      {/* External CSS  */}
      <h1 id="external-css">Hello External CSS</h1>
    </>
  );
}
export default TestJSX;
