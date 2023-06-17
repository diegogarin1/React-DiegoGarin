
import './App.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Electronics from "./pages/Electronics"
import Jewelry from "./pages/Jewelry"
import Cart from "./pages/Cart"
import DetailPage from "./pages/DetailPage"

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {

  return (
    <Router>
 
      <div className='App'>
<Header />
<Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/Jewelry" element={<Jewelry />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" element={<DetailPage />} />

          </Routes>
<Footer />
      </div>
      </Router>

  )
}

export default App
