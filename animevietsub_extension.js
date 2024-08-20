const axios = require('axios');
const cheerio = require('cheerio');

async function fetchAnimeVietsub() {
    try {
        const response = await axios.get('https://animevietsub.app/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        const html = response.data;
        const $ = cheerio.load(html);

        // Example: Extracting titles of anime
        const animeTitles = [];
        $('.anime-title').each((index, element) => {
            animeTitles.push($(element).text());
        });

        console.log(animeTitles);
    } catch (error) {
        console.error('Error fetching AnimeVietsub:', error);
    }
}

fetchAnimeVietsub();
