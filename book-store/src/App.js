import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from 'components/Navbar';
// page
import Books from './pages/Books';
import Categories from './pages/Categories';


function App() {
  return (
    <BrowserRouter>

     <Navbar/>
      <main>
        <Routes>
          <Route index element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
