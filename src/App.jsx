import Navbar from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SearchBar />
    </div>
  );
}

export default App;
