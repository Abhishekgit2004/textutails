import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export default function Navbar({ title, mode, toggleMode, abhi }) {
  const handleModeToggle = () => {
    toggleMode();
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div 
              className='bg-primary rounded mx-2'
              onClick={() => toggleMode('primary')}
              style={{height: '30px', width: '30px'}}
            ></div>
            <div 
              className='bg-danger rounded mx-2'
              onClick={() => toggleMode('danger')}
              style={{height: '30px', width: '30px'}}
            ></div>
            <div 
              className='bg-success rounded mx-2'
              onClick={() => toggleMode('success')}
              style={{height: '30px', width: '30px'}}
            ></div>
            <div 
              className='bg-warning rounded mx-2'
              onClick={() => toggleMode('warning')}
              style={{height: '30px', width: '30px'}}
            ></div>
          </div>
          <div className={`form-check form-switch text-${mode === 'light' ? 'cyan' : 'light'}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              onClick={handleModeToggle} 
              role="switch" 
              id="modeSwitch"
            />
            <label className="form-check-label" htmlFor="modeSwitch">{abhi}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  abhi: PropTypes.string.isRequired,
};
