const baseURl = "https://rickandmortyapi.com/api";

const characters = `${baseURl}/character/`;

const locations = `${baseURl}/location`;

export const getMorty = () => {
  return fetch(characters + "2").then((response) => response.json());
};
