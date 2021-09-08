import React, {useState} from 'react';

export const SearchBar = ({ handleFormSubmit }) => {
  const [term, setTerm] = useState('Recherche')
  const handleChange = e => {
    setTerm(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    handleFormSubmit(term)
  }
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="search">Video Search</label>
            <input onChange={handleChange} value={term} type="text"/>
          </div>
        </form>
      </div>
  );
};
