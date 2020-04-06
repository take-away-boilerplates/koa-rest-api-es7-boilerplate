import axios from 'axios';
import { HACKER_NEWS_URL } from 'constants/endpoints';

export const getAll = async () => {
  const response = await axios.get(`${HACKER_NEWS_URL}/search_by_date`,
    {
      params: {
        query: 'nodejs',
      },
    });

  if (!response.data || !response.data.hits) {
    throw new Error('Invalid response received');
  }

  const { hits } = response.data;
  return hits;
};
