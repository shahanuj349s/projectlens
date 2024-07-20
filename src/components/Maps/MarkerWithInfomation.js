import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import React, { useState } from "react";

function MarkerWithInfomation({ latitude, longitude, name, address, number }) {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <div>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{ lat: latitude, lng: longitude }}
        title={"AdvancedMarker that opens an Infowindow when clicked."}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          <div>
            <div>{name}</div>
            <div>{address}</div>
            <div>{number}</div>
          </div>
        </InfoWindow>
      )}
    </div>
  );
}

export default MarkerWithInfomation;
