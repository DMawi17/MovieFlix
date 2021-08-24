import "./style.css";
import Home from "./components/Home";
<<<<<<< HEAD
import { useState } from "react";
import Footer from "./components/Footer";

function App({ data }) {
  const [movie] = useState(data);

  return (
    <div className="App">
      {movie.map((m) => (
        <Home key={m.category} {...m} />
      ))}

      <Footer />
    </div>
  );
=======

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
>>>>>>> maxie
}

export default App;
