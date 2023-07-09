/* eslint-disable */

import { useParams } from "react-router-dom";
import { getPlaceDetails } from "../../../utils/HelperFunctions";
import "./DestinationDetail.css";
import { data } from "../../../core/database/Database";

const DestinationDetail = () => {
  const { continentName, countryName, destinationName } = useParams();
  const continent = getPlaceDetails(data.continents, continentName);
  const country = getPlaceDetails(continent.countries, countryName);
  const {
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = getPlaceDetails(country.destinations, destinationName);
  return (
    <div className="description-section">
      <h1>{name}</h1>
      <div className="countries padding">
        <img src={image} alt={name} />
        <div className="description-content">
          <p>
            <span className="bold purple-color">Description:</span>{" "}
            {description}
          </p>
          <p>
            <span className="bold purple-color">Ratings:</span> {ratings}
          </p>
          <p>
            <span className="bold purple-color">Reviews:</span> {reviews}
          </p>
          <p>
            <span className="bold purple-color">Location:</span> {location}
          </p>
          <p>
            <span className="bold purple-color">Opening Hours:</span>{" "}
            {openingHours}
          </p>
          <p>
            <span className="bold purple-color">Ticket Price:</span>{" "}
            {ticketPrice}
          </p>
          <p>
            <a href={website} target="_blank" rel="noreferrer">
              Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
