import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { FrontPage } from "./Pages/FrontPage/FrontPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { HotelsPage } from "./Pages/hotelsPage/HotelsPage";
import { Rooms } from "./Pages/Rooms/Rooms";
import { ReservationsPage } from "./Pages/ReservationsPage/ReservationsPage";
import { NewsDetailPage } from "./Pages/NewsDetailsPage/NewsDetailPage";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<FrontPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/destinations" element={<HotelsPage/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/reservations" element={<ReservationsPage/>}/>
          <Route path="/news/:id" element={<NewsDetailPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
