// https://api.tvmaze.com/search/shows?q=${input}

// https://api.tvmaze.com/search/shows?q=spiderman

const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );

  return response;
}
