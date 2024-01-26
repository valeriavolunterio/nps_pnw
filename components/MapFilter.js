import React, { useState } from 'react';

const MapFilterComponent = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    parks: [],
    places: [],
    experiences: [],
    amenities: [],
  });

  const handleCheckboxChange = (category, value) => {
    const updatedFilters = { ...filters, [category]: [...filters[category]] };

    if (updatedFilters[category].includes(value)) {
      // Remove the filter if it already exists
      updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
    } else {
      // Add the filter if it doesn't exist
      updatedFilters[category] = [...updatedFilters[category], value];
    }

    setFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div>
      <h3>Parks</h3>
      {/* Filters for Park Types */}
      <label>
        <input
          type="checkbox"
          checked={filters.parks.includes('National Park')}
          onChange={() => handleCheckboxChange('parks', 'National Park')}
        />
        National Park
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.parks.includes('National Historic Park/Site')}
          onChange={() => handleCheckboxChange('parks', 'National Historic Park/Site')}
        />
        National Historic Park/Site
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.parks.includes('National Recreation Area')}
          onChange={() => handleCheckboxChange('parks', 'National Recreation Area')}
        />
        National Recreation Area
      </label>

      <h3>Places</h3>
      {/* Filters for Places */}
      <label>
        <input
          type="checkbox"
          checked={filters.places.includes('Geological')}
          onChange={() => handleCheckboxChange('places', 'Geological')}
        />
        Geological
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.places.includes('Historical')}
          onChange={() => handleCheckboxChange('places', 'Historical')}
        />
        Historical
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.places.includes('Overlook')}
          onChange={() => handleCheckboxChange('places', 'Overlook')}
        />
        Overlook
      </label>

      <h3>Experiences</h3>
      {/* Filters for Experiences */}
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Backcountry Hiking')}
          onChange={() => handleCheckboxChange('experiences', 'Backcountry Hiking')}
        />
        Backcountry Hiking
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Camping')}
          onChange={() => handleCheckboxChange('experiences', 'Camping')}
        />
        Camping
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Climbing')}
          onChange={() => handleCheckboxChange('experiences', 'Climbing')}
        />
        Climbing
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Diving')}
          onChange={() => handleCheckboxChange('experiences', 'Diving')}
        />
        Diving
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Fishing')}
          onChange={() => handleCheckboxChange('experiences', 'Fishing')}
        />
        Fishing
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Kayak/Canoe')}
          onChange={() => handleCheckboxChange('experiences', 'Kayak/Canoe')}
        />
        Kayak/Canoe
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Skiing')}
          onChange={() => handleCheckboxChange('experiences', 'Skiing')}
        />
        Skiing
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Swimming')}
          onChange={() => handleCheckboxChange('experiences', 'Swimming')}
        />
        Swimming
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Trails')}
          onChange={() => handleCheckboxChange('experiences', 'Trails')}
        />
        Trails
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.experiences.includes('Wildlife Viewing')}
          onChange={() => handleCheckboxChange('experiences', 'Wildlife Viewing')}
        />
        Wildlife Viewing
      </label>

      <h3>Amenities</h3>
      {/* Filters for Amenities*/}
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Accessibility')}
          onChange={() => handleCheckboxChange('amenities', 'Accessibility')}
        />
        Accessibility
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Parking')}
          onChange={() => handleCheckboxChange('amenities', 'Parking')}
        />
        Parking
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Public Restrooms')}
          onChange={() => handleCheckboxChange('amenities', 'Public Restrooms')}
        />
        Public Restrooms
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Drinking Water')}
          onChange={() => handleCheckboxChange('amenities', 'Drinking Water')}
        />
        Drinking Water
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Food')}
          onChange={() => handleCheckboxChange('amenities', 'Food')}
        />
        Food
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Information')}
          onChange={() => handleCheckboxChange('amenities', 'Information')}
        />
        Information
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Permits and Passes')}
          onChange={() => handleCheckboxChange('amenities', 'Permits and Passes')}
        />
        Permits and Passes
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Souvenir and Supplies')}
          onChange={() => handleCheckboxChange('amenities', 'Souvenir and Supplies')}
        />
        Souvenir and Supplies
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Picnic Tables')}
          onChange={() => handleCheckboxChange('amenities', 'Picnic Tables')}
        />
        Picnic Tables
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.amenities.includes('Fuel')}
          onChange={() => handleCheckboxChange('amenities', 'Fuel')}
        />
        Fuel
      </label>

      <button onClick={handleApplyFilters}>Apply filters</button>
    </div>
  );
};

export default MapFilterComponent;