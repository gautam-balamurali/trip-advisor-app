/* eslint-disable */

import { Link, useParams } from "react-router-dom";
import Card from "../../shared/Card";
import "./CountryCategory.css";
import { data } from "../../../core/database/Database";
import { getPlaceDetails } from "../../../utils/HelperFunctions";

const CountryCategory = () => {
  const { continentName } = useParams();
  console.log({continentName})
  const { continents } = data;
  const continent = getPlaceDetails(continents, continentName);
  return (
    <div>
      <h2>Top Countries in {continent.name} for your next holiday</h2>
      <div className="continents">
        {continent.countries.map((country) => (
          <div key={country.id}>
            <Link to={`/${continentName}/${country.name}`}>
              <Card {...country} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCategory;
