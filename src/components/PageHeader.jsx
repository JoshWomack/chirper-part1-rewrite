import React from "react";

function PageHeader(props) {
  return (
    <div className="jumbotron pl-5 text-center bg-secondary">
      <h1 className="display-4 font-weight-bold text-light">Chirper</h1>
      <div
        className="btn btn-dark mt-5 text-light"
        onClick={props.handleToggleCreateChirp}
      >
        Create Chirp
      </div>
    </div>
  );
}

export default PageHeader;
