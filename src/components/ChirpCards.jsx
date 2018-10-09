import React from "react";

function CreateChirpCards(props) {
  let cards = props.chirps.map(chirp => {
    return (
      <div key={chirp.chirpId} className="mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title bg-secondary text-light p-2">
              {" "}
              {chirp.userName}{" "}
            </h5>
            <p className="card-text p-4">{chirp.chirpContent}</p>
            <p className="text-right mr-3">{chirp.chirpDate.substr(4, 17)}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="container">{cards}</div>;
}

export default CreateChirpCards;
