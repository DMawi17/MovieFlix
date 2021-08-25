import "./style.css";
import Home from "./components/Home";
// const { user, setUser } = useUser();

function App() {
    return (
        <div className="App">
            {/* {user && <Home />} */}
            {/* {!user && <Login />} */}
            <Home />
        </div>
    );
}

export default App;
