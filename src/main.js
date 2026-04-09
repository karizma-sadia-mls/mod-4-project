import './style.css';
import { fetchArtworks } from './fetch-helpers.js';
import { renderGallery, closeModal } from './dom-helpers.js';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const audioBtn = document.getElementById('audio-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal');

let audioCtx = null;
let oscillators = [];
let audioPlaying = false;

const search = async (keyword) => {
  const statusBar = document.getElementById('status-bar');
  const artworkDiv = document.getElementById('artwork');

  statusBar.textContent = `Searching for "${keyword}"...`;
  artworkDiv.innerHTML = '<p class="loading">Loading...</p>';

  const { data, error } = await fetchArtworks(keyword, 24);

  if (error || !data) {
    statusBar.textContent = 'Something went wrong. Try again.';
    artworkDiv.innerHTML = `<p class="no-results">Could not load artworks: ${error}</p>`;
    return;
  }

  renderGallery(data);
};

searchBtn.addEventListener('click', () => {
  const keyword = searchInput.value.trim() || 'impressionism';
  search(keyword);
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const keyword = searchInput.value.trim() || 'impressionism';
    search(keyword);
  }
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

const toggleAudio = () => {
  if (!audioPlaying) {
    audioCtx = new AudioContext();
    const gain = audioCtx.createGain();
    gain.gain.value = 0.05;
    gain.connect(audioCtx.destination);
    [261.63, 329.63, 392.0, 523.25].forEach((freq) => {
      const osc = audioCtx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(gain);
      osc.start();
      oscillators.push(osc);
    });
    audioPlaying = true;
    audioBtn.textContent = '♪ Stop Music';
  } else {
    oscillators.forEach((o) => o.stop());
    oscillators = [];
    audioCtx.close();
    audioPlaying = false;
    audioBtn.textContent = '♪ Play Music';
  }
};

audioBtn.addEventListener('click', toggleAudio);

search('flower');