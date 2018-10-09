import React from "react";

function ChirpCard(props) {
  console.log(props.cardKey);
  return (
    <div key={props.cardKey.toString()} className="mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title bg-secondary text-light p-2">
            {props.cardTitle}
          </h5>
          <p className="card-text p-4">{props.cardContent}</p>
          <p className="text-right mr-3">{props.cardDate.substr(4, 17)}</p>
        </div>
      </div>
    </div>
  );
}

export default ChirpCard;
