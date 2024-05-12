import React from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// js file
import Home from "./components/pages/home";
import Nav from "./components/nav";
// import Loader from "./components/loader";
import Footer from "./components/footer";
import Admin from "./components/pages/admin/admin";

function App() {
// const [loading, setLoading] = useState(true)

// if (loading) {
//   setTimeout(() => {
//     setLoading(false)
//   }, 5000);
//   return <Loader />;
// }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Nav/><Home/><Footer/></>}/>
          <Route path="/admin" element={<><Admin/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
