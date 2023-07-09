export const getPlaceDetails = (list, name) => {
  return list.find((place) => place.name === name);
};
