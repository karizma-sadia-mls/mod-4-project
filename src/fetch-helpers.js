
export const fetchArtworks = () => {
  return fetch("https://api.artic.edu/api/v1/artworks")
    .then((response) => {
      if (!response.ok) {
        throw Error(
          `Fetch failed. ${response.status} ${response.statusText}`
        );
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
