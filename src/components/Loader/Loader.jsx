import React, { Fragment } from "react";
const Loader = ({showLoader}) => {

  return (
    <Fragment>
      <div className="spinner-border text-warning" role="status">
        {showLoader && <span className="visually-hidden">Loading...</span>}
      </div>
    </Fragment>
  );
};

export default Loader;
