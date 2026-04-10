const BASE_URL = 'https://api.artic.edu/api/v1';

export const fetchArtworks = (keyword, limit) => {
  return fetch(`${BASE_URL}/artworks/search?q=${keyword}&limit=${limit}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return { data: data.data, error: null };
    })
    .catch((error) => {
      return { data: null, error };
    });
};

export const fetchArtworks = async (keyword = 'impressionism', limit = 20) => {
  try {
    const url = `${BASE_URL}/artworks/search?q=${encodeURIComponent(keyword)}&limit=${limit}&fields=id,title,image_id,artist_display,date_display`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data: data.data, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
};

export const fetchSingleArtwork = async (id) => {
  try {
    const url = `${BASE_URL}/artworks/${id}?fields=id,title,image_id,artist_display,date_display,medium_display,dimensions`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data: data.data, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
};