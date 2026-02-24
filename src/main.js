//this file you would use dom helpers and fetch helpers to render data to hmtl pages
import { fetchArtworks } from "./fetch-helpers.js";
import { renderArtworks } from "./dom-helpers.js";

const form = document.getElementById("search-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const keyword = form.keyword.value;
  const limit = form.limit.value;



  const result = await fetchArtworks(keyword, limit);


  if (result.error) {
    console.error(result.error);
    return;
  }
  console.log(result)
  renderArtworks(result.data);
});
