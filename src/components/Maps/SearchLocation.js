import React, { useEffect, useState } from "react";
import "./SearchLocation.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const locations = {
  Ahmedabad: [
    {
      shop_name: "Veena optical Co.",
      shop_addr: "GR 7-8 , Kothari pol , Gandhi road , Khadia",
      shop_number: "079-22144797",
      link: "Veena+Optical+Co",
    },
    {
      shop_name: "R Kumar",
      shop_addr:
        "Shangrila Arcade, 14, 100 Feet Anand Nagar Rd, Near Shyamal Crossroads, Satellite",
      shop_number: "90990 87153",
      link: "R+Kumar+Opticians-+Optical+Store+in+Satellite",
    },
    {
      shop_name: "R Kumar",
      shop_addr:
        "Shangrila Arcade, 14, 100 Feet Anand Nagar Rd, Near Shyamal Crossroads, Satellite",
      shop_number: "90990 87153",
      link: "R+Kumar+Opticians-+Optical+Store+in+Satellite",
    },
    {
      shop_name: "R Kumar",
      shop_addr:
        "Shangrila Arcade, 14, 100 Feet Anand Nagar Rd, Near Shyamal Crossroads, Satellite",
      shop_number: "90990 87153",
      link: "R+Kumar+Opticians-+Optical+Store+in+Satellite",
    },
    {
      shop_name: "Veena optical Co.",
      shop_addr: "GR 7-8 , Kothari pol , Gandhi road , Khadia",
      shop_number: "079-22144797",
      link: "Veena+Optical+Co",
    },
    {
      shop_name: "Veena optical Co.",
      shop_addr: "GR 7-8 , Kothari pol , Gandhi road , Khadia",
      shop_number: "079-22144797",
      logo: "../../Assets/logo.png",
      link: "Veena+Optical+Co",
    },
    {
      shop_name: "Veena optical Co.",
      shop_addr: "GR 7-8 , Kothari pol , Gandhi road , Khadia",
      shop_number: "079-22144797",
      link: "Veena+Optical+Co",
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
      link: "Veena+Optical+Co",
    },
    {
      lat: 23.229,
      lng: 72.65,
      shop_name: "Shop 4",
      shop_addr: "Address 4",
      shop_number: "5566778899",
      link: "R+Kumar+Opticians-+Optical+Store+in+Satellite",
    },
    // Add more locations for Gandhinagar
  ],
};

function SearchLocation() {
  const [selectedLocation, setSelectedLocation] = useState("Ahmedabad");

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container main-container">
      <h1>Our Optical Partner</h1>
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

      <div className="row mb-4">
        {locations[selectedLocation]
          .slice() // Create a copy of the array to avoid mutating the original
          .sort((a, b) => a.shop_name.localeCompare(b.shop_name))
          .map((shop, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 gap-3">
              <div className="card search-card w-100">
                <div className="card-body search-card-body">
                  <div>
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="card-container w-100">
                    <h5 className="card-title">{shop.shop_name}</h5>
                    <p className="card-text">{shop.shop_addr}</p>
                    <div className="card-div">
                      <p className="card-numb">{shop.shop_number}</p>

                      <Link
                        to={`https://www.google.com/maps/search/?api=1&query=${shop.link}`}
                        target="_blank"
                        className="text-primary"
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
