import { FC } from "react";
import AppRouts from "./components/AppRouts/AppRouts";

import "./App.scss";

const App: FC = () => {
  return (
    <div className="app">
      <AppRouts />
    </div>
  );
};

export default App;
