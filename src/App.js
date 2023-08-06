import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Fypage from "./components/Fypage";
import Header from "./components/Header";
import SyPractical from "./pages/practical/SyPractical";
import FyPractical from "./pages/practical/FyPractical";
import FyProjects from "./pages/Projects/FyProjects";
import Sypage from "./pages/Sypage"
import SyProjects from "./pages/Projects/SyProjects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="firstyear" element={<Outlet />}>
            <Route index element={<Fypage/>}/>
            <Route exact path="fypracticalsem1" element={<FyPractical/>}/>
            <Route exact path="fypracticalsem1" element={<FyPractical/>}/>
            <Route exact path="fyprojectsem1" element={<FyProjects/>}/>
            <Route exact path="fyprojectsem2" element={<FyProjects/>}/>
          </Route>
          <Route exact path="secondyear" element={<Outlet />}>
          <Route index element={<Sypage/>}/>
            <Route exact path="sypracticalsem1" element={<SyPractical/>}/>
            <Route exact path="sypracticalsem1" element={<SyPractical/>}/>
            <Route exact path="syprojectsem1" element={<SyProjects/>}/>
            <Route exact path="syprojectsem2" element={<SyProjects/>}/>
          </Route>
          <Route exact path="/thirdyear" element={<Header />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </>
  );
}

export default App;