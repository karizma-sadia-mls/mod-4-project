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
