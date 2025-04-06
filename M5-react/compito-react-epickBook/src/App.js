import './App.css';
import React, { useState } from 'react'; // Importazione di useState
import MyNavComponent from './Components/MyNavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooterComponent from './Components/MyFooterComponent';
import AllTheBooks from './Components/AllTheBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './Components/BookDetails';  // Importa BookDetails
import NotFound from './Components/NotFound'; // Importa il componente NotFound

function App() {
  const [searchTerm, setSearchTerm] = useState('');  // Uso di useState
  const [categoryFilter, setCategoryFilter] = useState('');  // Uso di useState

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
          {/* Rotta per AllTheBooks (homepage) */}
          <Route path="/" element={<AllTheBooks searchTerm={searchTerm} categoryFilter={categoryFilter} />} />
         
          {/* Rotta per BookDetails */}
          <Route path="/book/:asin" element={<BookDetails />} />
          
          {/* Rotta di fallback per NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <MyFooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
