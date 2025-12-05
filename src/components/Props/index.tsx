// import React from "react";
interface TestPrps {
  h1Description: string;
}
const TestProps: React.FC<TestPrps> = (props) => {
  return (
    <div>
      <h1 title="Hello world">{props.h1Description}</h1>
    </div>
  );
};


// function TestProps(props:TestPrps){
//     <div>
//         <h1 title="Hello World">{props.h1Description}</h1>

//     </div>
// }
export default TestProps;
