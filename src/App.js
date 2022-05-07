

import "./App.css";
import useFetch from "./hooks/useFetch";
function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      {data?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}
export default App;