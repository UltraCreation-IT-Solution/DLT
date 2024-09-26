import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.text())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>MERN App</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
