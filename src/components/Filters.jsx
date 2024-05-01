import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion, setType, setSortBy, setSearch, setLimit } from '../features/filtersSlice';
import './styles/filtersStyles.css';

const Filters = () => {
    const { region, type, sortBy, search, regions, types, sortby } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    
    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value;
        const regionData = regions.find(r => r.name === selectedRegion);
        dispatch(setRegion(selectedRegion));
        dispatch(setLimit({limit: regionData.limit, offset: regionData.offset}));
    };

    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        dispatch(setType(selectedType));
    }

    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        dispatch(setSortBy(selectedSort));
    }

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        dispatch(setSearch(searchTerm));
    }

    return (
        <div className="filter__container noselect">
          <div className="filter__items">
            <div>Region</div>
            <select value={region} onChange={handleRegionChange}>
              {regions.map((region) => (
                <option key={region.name} value={region.name}>
                  {region.name} ({region.offset + 1}-{region.limit + region.offset})
                </option>
              ))}
            </select>
          </div>
          <div className="filter__items">
            <div>Type</div>
            <select value={type} onChange={handleTypeChange}>
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="filter__items">
            <div>Sort by</div>
            <select value={sortBy} onChange={handleSortChange}>
              {sortby.map((sort) => (
                <option key={sort} value={sort}>{sort}</option>
              ))}
            </select>
          </div>
          <div className="filter__items">
            <label>Search</label>
            <input type="text" value={search} onChange={handleSearchChange}/>
          </div>
        </div>
    );
};
    
export default Filters;
