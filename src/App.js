import "./style.css";
import Home from "./components/Home";
// import { useState } from "react";

function App({ data }) {
    // const [movie] = useState(data);

    return (
        <div className="App">
            {data.map((m) => (
                <Home key={m.category} {...m} />
            ))}
        </div>
    );
}

export default App;
