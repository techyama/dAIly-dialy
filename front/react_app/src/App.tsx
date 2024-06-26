import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import DiaryEntry from "./components/DiaryEntry";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Header />
        <div className="pt-20 w-full justify-center items-center">
          <DiaryEntry />
        </div>
      </div>
    </Provider>
  );
};

export default App;
