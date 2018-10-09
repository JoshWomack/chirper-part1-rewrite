import React from "react";
import ChirpCard from "./ChirpCard";
function Timeline(props) {
  let cards = props.chirps.map(chirp => {
    return (
      <ChirpCard
        cardContent={chirp.chirpContent}
        cardTitle={chirp.userName}
        cardKey={chirp.chirpId}
        cardDate={chirp.chirpDate}
      />
    );
  });
  console.log(cards);
  return <div className="container">{cards}</div>;
}

export default Timeline;
