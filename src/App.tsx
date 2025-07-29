import { useEffect, useState } from "react";

const url =
  "http://api.weatherapi.com/v1/current.json?key=fd9de28b21e84760bb061639252907&q=London";

function App() {
  const [temp, setTemp] = useState(0);
  useEffect(() =>
    {
      const fetchData = async () => {
        const result = await fetch(url);
        result.json().then(json => {
          setTemp(json.current.temp_f)
        });
      }
      fetchData();
    },
    []
  );

  return <div>The current temp value is {temp} F.</div>;
}

export default App;
