import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="chi-siamo" element={<About/>}/>
            <Route path="prodotti" element={<Products/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
