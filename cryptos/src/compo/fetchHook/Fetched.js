import React from "react";
import ReactDOM from "react-dom";
import useFetch from "./useFetch";

import "./styles.css";

function App() {
  const { response, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <div className="App">
      <h1>useFetch Usage</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {response && <p>{response.title}</p>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
