import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import ProductPage from "./components/ProductPage"
import Page404 from "./components/Page404"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route index Component={Home} />
            <Route path="chi-siamo" Component={About}/>
            <Route path="prodotti" Component={Products}/>
            <Route path="prodotti/:id" Component={ProductPage}/>
            <Route path="*" Component={Page404} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
