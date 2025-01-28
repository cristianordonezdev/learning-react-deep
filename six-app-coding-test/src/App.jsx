import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

const Meals = lazy(() => import('./components/Meals.jsx'));
const About = lazy(() => import('./components/About.jsx'));

function App() {
  return (
    <section>
      <Header />
      <section className="main-container">
        <Suspense fallback={<div>Loading component because lazy layout...</div>}>
          <Routes>
            <Route path="/" element={<Meals />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </section>
    </section>
  );
}

export default App;