
import Login from "./Login";
import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

function App() {

  return (
    <DataProvider>
      <Home />
      {/* <Login /> */}
    </DataProvider>
  );
}

export default App; 
