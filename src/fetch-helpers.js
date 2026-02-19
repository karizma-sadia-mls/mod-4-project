export const fetchArtworks = () => {
  return fetch("https://api.artic.edu/api/v1/artworks")
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return { data, error: null };
    })
    .catch((error) => {
      return { data: null, error };
    });
};

//this is Karizma's singular fetch call//

export const fetchSingleArtwork = () => {
  return fetch("https://api.artic.edu/api/v1/artworks/129884")
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return { data, error: null };
    })
    .catch((error) => {
      return { data: null, error };
    });
};

fetchSingleArtwork();
