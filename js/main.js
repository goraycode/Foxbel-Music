


function getAPI() {
    const app_id = 556982;
    const app_secret = 'b03e870068139f80b100b6c9fe3bd8cf';
    const my_url = 'https://appfoxbelmusic.netlify.app/';


    let url = `https://api.deezer.com/version/service/id/method/?parameters`;

    fetch(url)
        .then(response => response.json())
        .then(resultado => console.log(resultado))
        .catch(err => console.log(err));
}


document.addEventListener('DOMContentLoaded', getAPI);

