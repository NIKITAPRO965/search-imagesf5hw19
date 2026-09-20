const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "55396799-af467bce3dc1f029cc7ffe916"


export const fetchImages = (query, page = 1) =>{


    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}`).then(res => res.json())
}