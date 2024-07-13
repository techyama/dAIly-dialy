import React from "react";
import { Provider } from "react-redux";
import { store } from "./../store";
import Translator from "./../components/Translator";
import DiaryEntry from "./../components/DiaryEntry";
import Feedback from "./../components/Feedback";


const Home: React.FC = () => {
  return (
    <Provider store={store}>
        <Translator />
        <DiaryEntry />
        <Feedback />
    </Provider>
  );
};

export default Home;