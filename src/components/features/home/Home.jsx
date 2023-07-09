/* eslint-disable */

import { Link } from "react-router-dom";
import { data } from "../../../core/database/Database";
import Header from "../../layouts/header/Header";
import "./Home.css";
import Card from "../../shared/Card";

const Home = () => {
  const { continents } = data;

  return (
    <div className="continents-category">
      <Header />
      <h2>Top Continents for your next holiday</h2>
      <div className="continents">
        {continents.map((continent) => (
          <div key={continent.id}>
            <Link to={`/${continent.name}`}>
              <Card {...continent} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
