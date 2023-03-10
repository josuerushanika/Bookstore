import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

// page
import Books from './pages/Books';
import Categories from './pages/Categories';


function App() {
  return (
    <div>
     <Navbar/>
      <main>
        <Routes>
          <Route index element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
      </div>
  );
}

export default App;