import React, { useState } from 'react';

const SearchParkFilterComponent = ({ onApplyFilters }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (value) => {
    const updatedFilters = selectedFilters.includes(value)
      ? selectedFilters.filter((item) => item !== value)
      : [...selectedFilters, value];

    setSelectedFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      searchQuery,
      selectedFilters,
    });
  };

  return (
    <div>
      <h3>Search Filters</h3>

      <label>
        Search:
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>

      <h3>Filter by Type</h3>
      <label>
        <input
          type="checkbox"
          checked={selectedFilters.includes('National Park')}
          onChange={() => handleCheckboxChange('National Park')}
        />
        National Park
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedFilters.includes('National Historic Park/Site')}
          onChange={() => handleCheckboxChange('National Historic Park/Site')}
        />
        National Historic Park/Site
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedFilters.includes('National Recreation Area')}
          onChange={() => handleCheckboxChange('National Recreation Area')}
        />
        National Recreation Area
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedFilters.includes('National Reserve')}
          onChange={() => handleCheckboxChange('National Reserve')}
        />
        National Reserve
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedFilters.includes('National Monument')}
          onChange={() => handleCheckboxChange('National Monument')}
        />
        National Monument
      </label>

      <button onClick={handleApplyFilters}>Apply filters</button>
    </div>
  );
};

export default SearchParkFilterComponent;