import './App.css';
import React, { useState } from 'react';
import MyNavComponent from './Components/MyNavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooterComponent from './Components/MyFooterComponent';
import AllTheBooks from './Components/AllTheBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './Components/BookDetails';  
import NotFound from './Components/NotFound'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        <Routes>

          <Route path="/" element={<AllTheBooks searchTerm={searchTerm} categoryFilter={categoryFilter} />} />
          <Route path="/book/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <MyFooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
