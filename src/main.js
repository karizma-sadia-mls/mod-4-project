//this file you would use dom helpers and fetch helpers to render data to hmtl pages

const container = document.getElementById("artwork");

fetch("https://api.artic.edu/api/v1/artworks/129884")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const artwork = data.data;

    const imageUrl = artwork.image_id
      ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
      : null;

    container.innerHTML = `
      <h2>${artwork.title}</h2>
      <p><strong>Artist:</strong> ${artwork.artist_title || "Unknown"}</p>
      <p><strong>Date:</strong> ${artwork.date_display || "N/A"}</p>
      ${imageUrl ? `<img src="${imageUrl}" alt="${artwork.title}" />` : ""}
    `;
  })
  .catch(error => {
    container.innerHTML = `<p>Error loading artwork.</p>`;
    console.error("Fetch error:", error);
  });
