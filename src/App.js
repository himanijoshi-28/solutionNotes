import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Fypage from "./pages/Fypage";
import Header from "./pages/Header";
import Sem3Practical from "./pages/practical/Sem3Practical";
import Sem4Practical from "./pages/practical/Sem4Practical";
import Sem1Practical from "./pages/practical/Sem1Practical";
import Sem2Practical from "./pages/practical/Sem2Practical";
import Sem1Projects from "./pages/Projects/Sem1Projects";
import Sypage from "./pages/Sypage";
import Sem3Projects from "./pages/Projects/Sem3Projects";
import Sem4Projects from "./pages/Projects/Sem4Projects";
import About from "./pages/About";
import Practical from "./pages/Practical";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="firstyear" element={<Outlet />}>
          <Route index element={<Fypage />} />
          <Route exact path="fypracticalsem1" element={<Sem1Practical />} />
          <Route exact path="fypracticalsem2" element={<Sem2Practical />} />
          <Route exact path="fyprojectsem1" element={<Sem1Projects />} />
          <Route exact path="fyprojectsem2" element={<Sem1Projects />} />
        </Route>
        <Route
          exact
          path="/firstyear/fypracticalsem1/:id"
          element={<Practical />}
        />
        <Route exact path="secondyear" element={<Outlet />}>
          <Route index element={<Sypage />} />
          <Route exact path="sypracticalsem3" element={<Sem3Practical />} />
          <Route exact path="sypracticalsem4" element={<Sem4Practical/>} />
          <Route exact path="syprojectsem3" element={<Sem3Projects />} />
          <Route exact path="syprojectsem4" element={<Sem4Projects/>} />
        </Route>
        <Route exact path="/thirdyear" element={<Header />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
