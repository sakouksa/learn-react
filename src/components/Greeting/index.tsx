function Greeting() {
  return <h1>Hello React</h1>;
}

export function Category() {
  return (
    <div>
      <h4>Category Id: 01</h4>
      <h4>Category Name: Apple</h4>
      <h4>Category Price: 600</h4>
    </div>
  );
}
export function Product() {
  return (
    <div>
      <h4>Product Id: 01</h4>
      <h4>Product Name: Macbook 13pro</h4>
      <h4>Category Id : Apple</h4>
      <h4>Product Price: 600</h4>
    </div>
  );
}

export default Greeting;
