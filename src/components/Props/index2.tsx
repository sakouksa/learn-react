import React from "react";

interface Props2 {
  source?: string;
}
const TestProps2: React.FC<Props2> = (prosp) => {
  const { source = "/public/images/avatar-10.png" } = prosp;
  return (
    <img
      style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      src={source}
      alt="Profile Image"
    />
  );
};
export default TestProps2;
