export const fetchArtworks = (keyword, limit) => {
  return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${keyword}&limit=${limit}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return { "data": data.data, error: null };
    })
    .catch((error) => {
      return { data: null, error };
    });
};

//this is Karizma's singular fetch call//
// TODO: make the URL dynamic by adding a parameter and update the endpoint to take in that parameter
export const fetchSingleArtwork = () => {
  return fetch("https://api.artic.edu/api/v1/artworks/129884")// make sting interpolation 
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
