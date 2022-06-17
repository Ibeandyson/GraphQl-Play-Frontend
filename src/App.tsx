import "./App.css";
import GlobalProvider from "./context/provider";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="bg">
      <GlobalProvider>
        <HomePage />
      </GlobalProvider>
    </div>
  );
}

export default App;
