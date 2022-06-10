import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Components
import { Footer } from "./components/Footer/Footer";

//Views
import { Start } from "./components/views/Start/Start";
import { Game } from "./components/views/Game/Game";

const Error404 = lazy(()=> import('./components/views/Error404/Error404'));

export const App = () => {

  const location = useLocation()

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path='*' element={<Suspense fallback={<>...</>}><Error404 /></Suspense>} />
      </Routes>
      <Footer />
    </>
  )
};