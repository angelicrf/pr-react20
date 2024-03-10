import "./App.css";
//import About from "../src/components/About";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import UseSuspense from "./components/UseSuspense";

function App() {
  return (
    <>
      <p className="text-red-400 font-bold text-2xl">My React Experimental</p>
      <UseSuspense />
    </>
  );
}

export default App;
