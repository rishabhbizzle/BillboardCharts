import Hot100 from "./components/Hot100";
import { Route, Routes} from "react-router-dom";
import Global from "./components/Global";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hot100" element={<Hot100/>} />
      <Route path="/global200" element={<Global/>} />
      <Route path="/album200" element={<Album/>} />
      <Route path="/artist100" element={<Artist/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
