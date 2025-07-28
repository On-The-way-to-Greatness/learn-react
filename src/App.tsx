import { useEffect, useState } from "react";

function App() {
  const [temp, setTemp] = useState(0);

  return <div>The current temp value is {temp}F.</div>;
}

export default App;
