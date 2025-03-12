import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import YourRecipeBox from "./pages/YourRecipeBox";
import TestMemo from "./pages/TestMemo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestReducer from "./pages/TestReducer";
import TestCallback from "./pages/TestCallback";
// import Compare from "./pages/Compare";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<YourRecipeBox/>}/>
          <Route path="/memo" element = {<TestMemo/>}/>
          <Route path="/reducer" element = {<TestReducer/>}/>
          <Route path="/callback" element = {<TestCallback/>}/>
          {/* <Route path="/compare" element = {<Compare/>}/> */}


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;