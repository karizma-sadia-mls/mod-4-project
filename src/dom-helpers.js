const IMG_BASE = 'https://www.artic.edu/iiif/2';

const buildImgUrl = (imageId, size = 400) =>
  `${IMG_BASE}/${imageId}/full/${size},/0/default.jpg`;

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

  statusBar.textContent = `Showing ${withImages.length} artwork(s)`;

  const grid = document.createElement('div');
  grid.className = 'gallery-grid';

  withImages.forEach((artwork) => {
    const card = document.createElement('div');
    card.className = 'art-card';
    const img = document.createElement('img');
    img.src = buildImgUrl(artwork.image_id);
    img.alt = artwork.title;
    img.loading = 'lazy';
    const title = document.createElement('p');
    title.className = 'card-title';
    title.textContent = artwork.title;
    card.appendChild(img);
    card.appendChild(title);
    card.addEventListener('click', () => openModal(artwork));
    grid.appendChild(card);
  });

  artworkDiv.appendChild(grid);
};

export const openModal = (artwork) => {
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modal-title').textContent = artwork.title;
  const modalImg = document.getElementById('modal-img');
  modalImg.src = artwork.image_id ? buildImgUrl(artwork.image_id, 600) : '';
  modalImg.alt = artwork.title;
  const artist = artwork.artist_display || 'Unknown';
  const date = artwork.date_display || 'Unknown';
  const meta = document.getElementById('modal-meta');
  meta.innerHTML = '';
  const p1 = document.createElement('p');
  p1.innerHTML = '<strong>Artist:</strong> ' + artist;
  const p2 = document.createElement('p');
  p2.innerHTML = '<strong>Date:</strong> ' + date;
  meta.appendChild(p1);
  meta.appendChild(p2);
};

export const closeModal = () => {
  document.getElementById('modal').classList.add('hidden');
};