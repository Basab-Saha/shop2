import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components2/Header";
import Home from "./Components2/Home";
import Cart from "./Components2/Cart";


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
