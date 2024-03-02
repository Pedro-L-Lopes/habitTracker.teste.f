// Css
import "./styles/global.css";

import "./lib/day";

// Components
import Header from "./components/Header";
import SummaryTable from "./components/SummaryTable";
import Habits from "./pages/Habits";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Habits />
      </div>
    </div>
  );
}

export default App;
