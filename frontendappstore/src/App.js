import React from "react";
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Layout from "./Components/Layout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

