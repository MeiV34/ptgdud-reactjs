// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import YourRecipeBox from "./pages/YourRecipeBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<YourRecipeBox/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;