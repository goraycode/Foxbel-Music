import { banner, galleryVideos } from "./interfaz.js";

function getAPI(write) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3a28efbae9msh33beba2add552bbp19053djsn4de28e3b0af3',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${write}&limit=10`, options)
        .then(response => response.json())
        .then(response => {
            banner(response.data);
            galleryVideos(response.data);
        })
        .catch(err => console.error(err));
}

export default getAPI;