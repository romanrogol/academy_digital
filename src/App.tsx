import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouts from "./components/AppRouts/AppRouts";
import { VZNProvider } from "./contexts/VZNContext";

const App: FC = () => {
  return (
    <VZNProvider>
      <Router>
        <AppRouts />
      </Router>
    </VZNProvider>
  );
};

export default App;
