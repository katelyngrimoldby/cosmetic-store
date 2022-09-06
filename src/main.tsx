import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
