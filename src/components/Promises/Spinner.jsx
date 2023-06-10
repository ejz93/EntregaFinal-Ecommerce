import React from 'react'

const Spinner = () => {
    return (
      <div className="m-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };
  
  export default Spinner;