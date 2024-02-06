import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { FrontPage } from "./Pages/FrontPage/FrontPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<FrontPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
