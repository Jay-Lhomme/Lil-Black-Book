import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleKeyUp = (e) => {
    const term = e.target.value.trim();
    setSearchTerm(term);
    if (term !== '') {
      router.push(`/search/${term}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (term !== '') {
      router.push(`/search/${term}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
