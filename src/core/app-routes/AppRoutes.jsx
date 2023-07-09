/* eslint-disable */

import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import PageNotFound from "../../pages/PageNotFound";
import CountryCategoryPage from "../../pages/CountryCategoryPage";
import DestinationCategoryPage from "../../pages/DestinationCategoryPage";
import DestinationDetailPage from "../../pages/DestinationDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/:continentName" element={<CountryCategoryPage />} />
      <Route
        path="/:continentName/:countryName"
        element={<DestinationCategoryPage />}
      />
      <Route
        path="/:continentName/:countryName/:destinationName"
        element={<DestinationDetailPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
