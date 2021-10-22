import React from "react"; //Import useState & useEffect from React

//Import the components
import Header from "./components/Header";

//Import the css
import "./App.css";

//Define the App component
const App = () => {
  return (
    <main>
      <Header title="hello" name="Omar" />
    </main>
  );
};

export default App;
