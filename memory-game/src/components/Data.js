const apiUrl = "https://api.jikan.moe/v4/";

//https://myanimelist.net/anime/1735/Naruto__Shippuuden/characters
const chsId = [13, 17, 85, 145, 14, 2007, 1662, 1555, 2535, 2792, 3179, 4773];

export async function fetchCharacters(animeId = 1735, charactersId = chsId) {
  const charactersUrl = `${apiUrl}anime/${animeId}/characters`;
  const response = await fetch(charactersUrl);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
  const characters = data.data;
  return characters.filter((item) => charactersId.includes(item.character.mal_id));
}

