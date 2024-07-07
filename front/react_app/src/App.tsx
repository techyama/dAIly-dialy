import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/common/Header";
import Translator from "./components/Translator";
import DiaryEntry from "./components/DiaryEntry";
import Feedback from "./components/Feedback";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center min-h-screen bg-gray-200">
        <Header />
        <Translator />
        <DiaryEntry />
        <Feedback />
      </div>
    </Provider>
  );
};

export default App;
