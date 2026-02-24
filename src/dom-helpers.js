//this is where we will do DOM manipulation to query DOM elements and create new ones

export const renderArtworks = (artworks) => {
  //must fetch image id from each artwork

  const artworkList = document.getElementById("artwork-list");
  artworkList.innerHTML = "";

  artworks.forEach((artwork) => {
    let image = fetch(artwork.api_link)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        let image = data.data.image_id
        console.log(image)
        const li = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = artwork.title;

        const img = document.createElement("img");

        if (image) {
          img.src = `https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`;
          img.alt = artwork.title;
          img.style.width = "200px";
        } else {
          img.alt = "No image available";
        }

        li.append(img, title);
        artworkList.appendChild(li);
      })

  });
};