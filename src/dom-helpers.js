//this is where we will do DOM manipulation to query DOM elements and create new ones

export const renderArtworks = (artworks) => {
  artworkList.innerHTML = ""; // clear old results

  artworks.forEach((artwork) => {
    const li = document.createElement("li");

    const title = document.createElement("h3");
    title.textContent = artwork.title;

    const img = document.createElement("img");

    if (artwork.image_id) {
      img.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
      img.alt = artwork.title;
    } else {
      img.alt = "No image available";
    }

    li.appendChild(img);
    li.appendChild(title);

    artworkList.appendChild(li);
  });
};

<<<<<<< HEAD
const container = document.getElementById("artwork");

 async function loadArtwork() {
  try {
    const response = await fetch("https://api.artic.edu/api/v1/artworks/129884");
    if (!response.ok) throw new Error("Failed to fetch data");

    const result = await response.json();
    const artwork = result.data;

    // Clear container
    container.textContent = "";

    // Create elements
    const title = document.createElement("h2");
    title.textContent = artwork.title;

    const artist = document.createElement("p");
    artist.textContent = `Artist: ${artwork.artist_title || "Unknown"}`;

    const date = document.createElement("p");
    date.textContent = `Date: ${artwork.date_display || "N/A"}`;

    container.appendChild(title);
    container.appendChild(artist);
    container.appendChild(date);

    // Add image if available
    if (artwork.image_id) {
      const img = document.createElement("img");
      img.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
      img.alt = artwork.title;
      img.style.maxWidth = "400px";

      container.appendChild(img);
    }

  } catch (error) {
    container.textContent = "Error loading artwork.";
    console.error(error);
  }
}

loadArtwork();
=======
export const renderSingleArtwork = (id) => {

}
>>>>>>> d1d44a4e4eaf8cba4be37f1c5d79ac3f9a567ccc
