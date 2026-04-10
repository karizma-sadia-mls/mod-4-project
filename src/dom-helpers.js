const IMG_BASE = 'https://www.artic.edu/iiif/2';

const buildImgUrl = (imageId, size = 400) =>
  `https://www.artic.edu/iiif/2/${imageId}/full/${size},/0/default.jpg`;

export const renderGallery = (artworks) => {
  const artworkDiv = document.getElementById('artwork');
  const statusBar = document.getElementById('status-bar');

  artworkDiv.innerHTML = '';

  const withImages = artworks.filter((a) => a.image_id);

  if (withImages.length === 0) {
    statusBar.textContent = 'No artworks found. Try a different keyword.';
    artworkDiv.innerHTML = '<p class="no-results">No results — try searching something else.</p>';
    return;
  }

  withImages.forEach((artwork) => {
    const li = document.createElement('li');

    const title = document.createElement('h3');
    title.textContent = artwork.title;

    const img = document.createElement('img');
    img.src = buildImgUrl(artwork.image_id);
    img.alt = artwork.title;
    img.style.width = "200px";

    li.append(img, title);
    artworkDiv.appendChild(li);
  });

  statusBar.textContent = `Showing ${withImages.length} artworks`;
};

  statusBar.textContent = `Showing ${withImages.length} artwork(s)`;

  const grid = document.createElement('div');
  grid.className = 'gallery-grid';

  withImages.forEach((artwork) => {
    const card = document.createElement('div');
    card.className = 'art-card';
    card.innerHTML = `
      <img src="${buildImgUrl(artwork.image_id)}" alt="${artwork.title}" loading="lazy" />
      <p class="card-title">${artwork.title}</p>
    `;
    card.addEventListener('click', () => openModal(artwork));
    grid.appendChild(card);
  });

  artworkDiv.appendChild(grid);
};

export const openModal = (artwork) => {
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modal-title').textContent = artwork.title;
  document.getElementById('modal-img').src = artwork.image_id
    ? buildImgUrl(artwork.image_id, 600)
    : '';
  document.getElementById('modal-img').alt = artwork.title;
  document.getElementById('modal-meta').innerHTML = `
    <p><strong>Artist:</strong> ${artwork.artist_display || 'Unknown'}</p>
    <p><strong>Date:</strong> ${artwork.date_display || 'Unknown'}</p>
  `;
};

export const closeModal = () => {
  document.getElementById('modal').classList.add('hidden');
};