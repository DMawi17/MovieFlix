import "./style.css";
import Home from "./components/Home";

import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const contextValue = { user, setUser };

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
