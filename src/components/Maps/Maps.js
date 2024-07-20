import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import MarkerWithInfomation from "./MarkerWithInfomation";
import { locations } from "./MapsData";

function Maps() {
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={key} libraries={["marker"]}>
      <Map
        mapId={"bf51a910020fa25a"}
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 5 }}
        defaultZoom={10}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {locations.map((location, index) => (
          <div key={index}>
            <MarkerWithInfomation
              latitude={location.lat}
              longitude={location.lng}
              name={location.shop_name}
              address={location.shop_addr}
              number={location.shop_number}
            />
          </div>
        ))}
      </Map>
    </APIProvider>
  );
}

export default Maps;
