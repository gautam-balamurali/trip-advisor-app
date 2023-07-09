/* eslint-disable */

import { Link, useParams } from "react-router-dom";
import "./DestinationCategory.css";
import { getPlaceDetails } from "../../../utils/HelperFunctions";
import Card from "../../shared/Card";
import { data } from "../../../core/database/Database";

const DestinationCategory = () => {
  const { continentName, countryName } = useParams();
  const continent = getPlaceDetails(data.continents, continentName);
  const country = getPlaceDetails(continent.countries, countryName);
  return (
    <div>
      <h2>Top Countries in {country.name} for your next holiday</h2>
      <div className="countries">
        {country.destinations.map((destination) => (
          <div key={destination.id}>
            <Link to={`/${continentName}/${countryName}/${destination.name}`}>
              <Card {...destination} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationCategory;
