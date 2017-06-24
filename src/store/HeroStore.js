import axios from 'axios';

const EMPTY_ARRAY = [];
const PORT = 3001;
const PROTOCOL = 'http';
const BASE_URL = `${PROTOCOL}://${window.location.hostname}:${PORT}`
let heroData = EMPTY_ARRAY;

export const getHeroes = async () => {
    // Get heroes for the first and only time (per client)
    if (heroData === EMPTY_ARRAY) {
        heroData = await axios.get(`${BASE_URL}/heroes`);
        heroData = heroData.data.results;
    }

    return heroData;
};


