import './scss/App.scss'
import Toolbar from "./components/toolbar/toolbar.jsx";
import Footer from "./components/footer/footer.jsx";
import React from "react";
import AppRoutes from "./routes/routes.jsx";

function App() {

  return (
    <>
        <Toolbar></Toolbar>
        <AppRoutes></AppRoutes>
        <Footer></Footer>
    </>
  )
}

export default App
