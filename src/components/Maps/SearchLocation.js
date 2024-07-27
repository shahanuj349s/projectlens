import React, { useState } from "react";
import "./SearchLocation.css";
import logo from "../../Assets/Logoimage1.png";
import { Link } from "react-router-dom";

const locations = {
  Ahmedabad: [
    {
      lat: 23.0225,
      lng: 72.5714,
      shop_name: "Veena optical Co.",
      shop_addr: "GR 7-8 , Kothari pol , Gandhi road , Khadia",
      shop_number: "079-22144797",
      logo: "../../Assets/VeenaOpticalLogo.png",
    },
    {
      lat: 23.03,
      lng: 72.58,
      shop_name: "Crown Optical Co.",
      shop_addr: "GR 7-8 , Kothari pol , Gandhi road , Khadia",
      shop_number: "079-22144797",
      logo: "../../Assets/VeenaOpticalLogo.png",
    },
    // Add more locations for Ahmedabad
  ],
  Gandhinagar: [
    {
      lat: 23.2156,
      lng: 72.6369,
      shop_name: "Shop 3",
      shop_addr: "Address 3",
      shop_number: "1122334455",
      logo: "../../Assets/VeenaOpticalLogo.png",
    },
    {
      lat: 23.229,
      lng: 72.65,
      shop_name: "Shop 4",
      shop_addr: "Address 4",
      shop_number: "5566778899",
      logo: "../../Assets/VeenaOpticalLogo.png",
    },
    // Add more locations for Gandhinagar
  ],
};

function SearchLocation() {
  const [selectedLocation, setSelectedLocation] = useState("Ahmedabad");

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="container">
      <h1>Find Optical store near me</h1>
      <div className="select-container">
        <select
          className="form-select"
          onChange={handleChange}
          value={selectedLocation}
        >
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Gandhinagar">Gandhinagar</option>
        </select>
      </div>

      <div className="row">
        {locations[selectedLocation]
          .slice() // Create a copy of the array to avoid mutating the original
          .sort((a, b) => a.shop_name.localeCompare(b.shop_name))
          .map((shop, index) => (
            <div key={index} className="d-flex col-md-6 col-lg-4 gap-2 mb-4">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img src={shop.logo} alt="logo" />
                  </div>
                  <div className="card-container">
                    <h5 className="card-title">{shop.shop_name}</h5>
                    <p className="card-text">{shop.shop_addr}</p>
                    <div className="card-div">
                      <p className="card-text">{shop.shop_number}</p>

                      <Link
                        to={
                          "https://www.google.com/maps/search/?api=1&query=R+Kumar+Opticians-+Optical+Store+in+Satellite"
                        }
                        target="_blank"
                      >
                        Get directions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchLocation;
