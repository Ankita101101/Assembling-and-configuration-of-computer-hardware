import { useState } from "react";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function App() {

  const [entered, setEntered] = useState(false);

  return (
    <>
      {entered ? (
        <Dashboard />
      ) : (
        <Home setEntered={setEntered} />
      )}
    </>
  );
}