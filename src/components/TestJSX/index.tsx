const name = "ReactJS";
const GreetingTitle = "This is ReactJS Title";
function TestJSX() {
  return (
    <>
      <h1>
        Hello {name} {1 + 2}
      </h1>
      <h1 title={GreetingTitle}>Hello Javascript</h1>
    </>
  );
}
export default TestJSX;
