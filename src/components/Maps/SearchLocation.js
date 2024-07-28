import React, { useEffect, useState } from "react";
import "./SearchLocation.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

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
        "3, Sigma-2, Sunrise Park Road, Lane Opposite to Himalaya Mall, Vastrapur Rd, below Bon Homie Restaurant",
      shop_number: "079-40301345",
      link: "R+Kumar+Opticians-+Optical+Store+in+Vastrapur",
    },
    {
      shop_name: "R Kumar",
      shop_addr:
        "Swastik Super Market, 1, Ashram Rd, opp. Sharma Hyundai, Shreyas Colony, Navrangpura",
      shop_number: "079-26588497",
      link: "R+Kumar+Opticians-+Optical+Store+in+Ashram",
    },
    {
      shop_name: "R Kumar",
      shop_addr:
        "Pariseema Complex, 15, Chimanlal Girdharlal Rd, next to Jade Blue, Ellisbridge",
      shop_number: "079-26401755",
      link: "R+Kumar+Opticians-+Optical+Store+in+CG+Road",
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
                  <div className="card-container search-card-container w-100">
                    <h5 className="card-title search-card-title">{shop.shop_name}</h5>
                    <p className="card-text search-card-text">{shop.shop_addr}</p>
                    <div className="search-card-div">
                      <div className="d-flex align-items-center gap-1">
                        <IoIosCall />
                        <div className="search-card-numb">{shop.shop_number}</div>
                      </div>

                      <div className="d-flex align-items-center gap-1">
                        <MdLocationOn />
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
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchLocation;
