import { BrowserRouter, Routes,Route,} from "react-router-dom";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Add from "./pages/Add";
import "./style.css"



function App() {
  return (
    <div className="App">
    
      <BrowserRouter> 
        <Routes>  
          <Route path="/" element={<Books/>} />         //Books, Add, Update they are the components that will be rendered for the respective routes
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />    // :id is a dynamic parameter that will be replaced with the actual book id when navigating to the update page
        </Routes>
        
      
      </BrowserRouter>

       
    </div>
  );
}

export default App;
