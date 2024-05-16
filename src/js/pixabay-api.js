import { API } from './constants.js';
import axios from 'axios';

let requestSearch;

export const fetchImages = async (searchQuery, page = 1) => {
  requestSearch = searchQuery;

  return await axios.get(API.PIXABAY.PATH, {
    params: {
      key: API.PIXABAY.KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: API.PIXABAY.PER_PAGE
    }
  });
};
