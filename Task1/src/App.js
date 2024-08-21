import { Routes, Route } from "react-router-dom";
import AnalyticsReports from "./pages/AnalyticsReports";
import EducationalCourses from "./pages/EducationalCourses";
import Markets from "./pages/Markets";
import Navbar from "./pages/Navbar";
import NewHome from "./pages/NewHome";
import Nopage from "./pages/Nopage";
import Social from "./pages/Social";
import Summary from "./pages/Summary";
export default function App() {
  return (
    <div className="bg-gray-100 text-2xl h-full md:px-8 py-8">
      <NewHome/>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Summary/>}/>
          <Route path="/Summary" element={<Summary/>}/>
          <Route path="/Markets" element={<Markets/>}/>
          <Route path="/Social" element={<Social/>}/>
          <Route path="/EducationalCourses" element={<EducationalCourses/>}/>
          <Route path="/AnalyticsReports" element={<AnalyticsReports/>}/>
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </div>
  );
}
