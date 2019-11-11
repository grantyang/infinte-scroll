import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useBookSearch from './useBookSearch';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const {
    books,
    hasMore,
    loading,
    error,
  } = useBookSearch(query, pageNumber);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
    <input type="text" onChange={handleSearch}></input>
    {books.map(book => {
      return <div key={book}>{book}</div>
    })}
    <div>{loading && 'Loading...'}</div>
    <div>{error && 'Error!'}</div>
    </>
    );
}

export default App;
