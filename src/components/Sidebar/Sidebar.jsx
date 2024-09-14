import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true); 

  const toggleSidebar = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {isVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
      
      {isVisible && (
        <aside className="sidebar">
          <h2>SHOP</h2>
          <div className="filter-section">
            <h3>3645 ITEMS</h3>
            <button className="clear-filter">CLEAR FILTER</button>
          </div>
          <div className="filter-section">
            <h3>CUSTOMIZABLE</h3>
            <label><input type="checkbox" /> Customizable</label>
          </div>
          <div className="filter-section">
            <h3>IDEAL FOR</h3>
            <label><input type="checkbox" /> All</label>
            <label><input type="checkbox" /> Men</label>
            <label><input type="checkbox" /> Women</label>
            <label><input type="checkbox" /> Boys</label>
            <label><input type="checkbox" /> Girls</label>
          </div>
          <div className="filter-section">
            <h3>OCCASION</h3>
            <label><input type="checkbox" /> All</label>
          </div>
          <div className="filter-section">
            <h3>WORK</h3>
            <label><input type="checkbox" /> All</label>
          </div>
          <div className="filter-section">
            <h3>FABRIC</h3>
            <label><input type="checkbox" /> All</label>
          </div>
          <div className="filter-section">
            <h3>SEGMENT</h3>
            <label><input type="checkbox" /> All</label>
          </div>
          <div className="filter-section">
            <h3>SUITABLE FOR</h3>
            <label><input type="checkbox" /> All</label>
          </div>
          <div className="filter-section">
            <h3>RAW MATERIALS</h3>
            <label><input type="checkbox" /> All</label>
          </div>
          <div className="filter-section">
            <h3>PATTERN</h3>
            <label><input type="checkbox" /> All</label>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
